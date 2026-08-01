/**
 * One-off import of the content authored through the old Django admin.
 *
 * Reads BackEnd/db.sqlite3 with Node's built-in sqlite driver and writes the
 * rows into Postgres, preserving primary keys so that media paths and any
 * bookmarked /jobs/<id> URLs keep pointing at the same records.
 */
import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PrismaClient } from "@prisma/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SQLITE_PATH = path.resolve(__dirname, "../../BackEnd/db.sqlite3");

const prisma = new PrismaClient();
const sqlite = new DatabaseSync(SQLITE_PATH, { readOnly: true });

const rows = (table) => sqlite.prepare(`SELECT * FROM ${table}`).all();

// Django stores DateField as 'YYYY-MM-DD' and DateTimeField as an ISO string.
const toDate = (value) => new Date(`${value}T00:00:00.000Z`);
const toDateTime = (value) => new Date(value.endsWith("Z") ? value : `${value}Z`);

const TABLES = [
  {
    table: "MISI_heroslider",
    model: "heroSlider",
    map: (r) => ({ id: r.id, title: r.title, subTitle: r.subTitle, heroImage: r.heroImage }),
  },
  {
    table: "MISI_award",
    model: "award",
    map: (r) => ({ id: r.id, title: r.title, heroImage: r.heroImage }),
  },
  {
    table: "MISI_specialevent",
    model: "specialEvent",
    map: (r) => ({
      id: r.id,
      title: r.title,
      description: r.description ?? "",
      image: r.image,
      startDate: toDate(r.startDate),
      endDate: toDate(r.endDate),
    }),
  },
  {
    table: "MISI_whychooseus",
    model: "whyChooseUs",
    map: (r) => ({
      id: r.id,
      title: r.title,
      description: r.description,
      image: r.image,
      details_information: r.details_information,
    }),
  },
  {
    table: "MISI_service",
    model: "service",
    map: (r) => ({
      id: r.id,
      href: r.href,
      name: r.name,
      description: r.description ?? "",
      image: r.image,
    }),
  },
  {
    table: "MISI_clientcouncil",
    model: "clientCouncil",
    map: (r) => ({ id: r.id, name: r.name, phone: r.phone, message: r.message }),
  },
  {
    table: "MISI_contactform",
    model: "contactForm",
    map: (r) => ({
      id: r.id,
      name: r.name,
      email: r.email,
      subject: r.subject,
      message: r.message,
    }),
  },
  {
    table: "MISI_jobspost",
    model: "jobsPost",
    map: (r) => ({
      id: r.id,
      title: r.title,
      description: r.description,
      image: r.image,
      category: r.category,
      vacancy: r.vacancy,
      requirement: r.requirement,
      created_at: toDateTime(r.created_at),
      endDate: toDateTime(r.endDate),
    }),
  },
  {
    table: "MISI_appliedcandidates",
    model: "appliedCandidates",
    map: (r) => ({
      id: r.id,
      jobsPostTitle: r.jobsPostTitle,
      name: r.name,
      email: r.email,
      phone: r.phone,
      postName: r.postName,
      cv: r.cv,
      identityCard: r.IdentityCard,
      created_at: toDateTime(r.created_at),
    }),
  },
];

// Postgres sequences don't advance when explicit ids are inserted, so the next
// insert would collide with an imported row. Fast-forward each one.
const resyncSequence = async (table) => {
  await prisma.$executeRawUnsafe(
    `SELECT setval(pg_get_serial_sequence('"${table}"', 'id'),
       GREATEST((SELECT COALESCE(MAX(id), 0) FROM "${table}"), 1))`
  );
};

const run = async () => {
  for (const { table, model, map } of TABLES) {
    const source = rows(table);
    if (source.length === 0) {
      console.log(`${table.padEnd(26)} 0 rows, skipped`);
      continue;
    }

    await prisma[model].createMany({
      data: source.map(map),
      skipDuplicates: true,
    });

    const written = await prisma[model].count();
    console.log(`${table.padEnd(26)} ${source.length} read -> ${written} in postgres`);
  }

  for (const t of [
    "hero_slider",
    "award",
    "special_event",
    "why_choose_us",
    "service",
    "client_council",
    "contact_form",
    "jobs_post",
    "applied_candidates",
  ]) {
    await resyncSequence(t);
  }
  console.log("\nsequences resynced");
};

run()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    sqlite.close();
    await prisma.$disconnect();
  });
