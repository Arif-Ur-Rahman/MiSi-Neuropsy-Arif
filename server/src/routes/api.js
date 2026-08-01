import { Router } from "express";
import multer from "multer";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { prisma } from "../prisma.js";
import * as shape from "../serialize.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resolved from this file rather than cwd, so the server can be started from
// anywhere (process managers rarely run from the project root).
export const MEDIA_ROOT = path.resolve(__dirname, "../../media");

// Mirrors Django's upload_to='CV' / upload_to='IdCard'.
const uploadDirFor = (field) => (field === "cv" ? "CV" : "IdCard");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dir = path.join(MEDIA_ROOT, uploadDirFor(file.fieldname));
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename(req, file, cb) {
    // Keep the original name but suffix it, so re-uploads never clobber.
    const ext = path.extname(file.originalname);
    const stem = path.basename(file.originalname, ext).replace(/[^\w.-]+/g, "_");
    cb(null, `${stem}_${crypto.randomBytes(4).toString("hex")}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const router = Router();

/** DRF-style validation error body, so failures look the way they used to. */
const requireFields = (body, fields) => {
  const errors = {};
  for (const field of fields) {
    const value = body?.[field];
    if (value === undefined || value === null || String(value).trim() === "") {
      errors[field] = ["This field is required."];
    }
  }
  return Object.keys(errors).length > 0 ? errors : null;
};

const list = (model, serializer) => async (req, res, next) => {
  try {
    const rows = await prisma[model].findMany({ orderBy: { id: "asc" } });
    res.json(rows.map(serializer(req)));
  } catch (error) {
    next(error);
  }
};

const retrieve = (model, serializer) => async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(404).json({ detail: "Not found." });
    }
    const row = await prisma[model].findUnique({ where: { id } });
    if (!row) {
      return res.status(404).json({ detail: "Not found." });
    }
    res.json(serializer(req)(row));
  } catch (error) {
    next(error);
  }
};

// --- read endpoints -------------------------------------------------------

router.get("/hero-slider/", list("heroSlider", shape.heroSlider));
router.get("/award/", list("award", shape.award));
router.get("/special-event/", list("specialEvent", shape.specialEvent));
router.get("/service/", list("service", shape.service));

router.get("/why-choose-us/", list("whyChooseUs", shape.whyChooseUs));
router.get("/why-choose-us/:id", retrieve("whyChooseUs", shape.whyChooseUs));

router.get("/jobs/", list("jobsPost", shape.jobsPost));
router.get("/jobs/:id", retrieve("jobsPost", shape.jobsPost));

// --- write endpoints ------------------------------------------------------

router.post("/client-council/", async (req, res, next) => {
  try {
    const errors = requireFields(req.body, ["name", "phone", "message"]);
    if (errors) return res.status(400).json(errors);

    const { name, phone, message } = req.body;
    const row = await prisma.clientCouncil.create({ data: { name, phone, message } });
    res.status(201).json(shape.clientCouncil(req)(row));
  } catch (error) {
    next(error);
  }
});

router.post("/contact-form/", async (req, res, next) => {
  try {
    const errors = requireFields(req.body, ["name", "email", "subject", "message"]);
    if (errors) return res.status(400).json(errors);

    const { name, email, subject, message } = req.body;
    const row = await prisma.contactForm.create({
      data: { name, email, subject, message },
    });
    res.status(201).json(shape.contactForm(req)(row));
  } catch (error) {
    next(error);
  }
});

router.post(
  "/applied-candidates/",
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "IdentityCard", maxCount: 1 },
  ]),
  async (req, res, next) => {
    try {
      const errors = requireFields(req.body, ["name", "email", "phone", "postName"]) ?? {};
      const cv = req.files?.cv?.[0];
      const identityCard = req.files?.IdentityCard?.[0];

      if (!cv) errors.cv = ["No file was submitted."];
      if (!identityCard) errors.IdentityCard = ["No file was submitted."];
      if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
      }

      const row = await prisma.appliedCandidates.create({
        data: {
          jobsPostTitle: req.body.jobsPostTitle || null,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          postName: req.body.postName,
          cv: `CV/${cv.filename}`,
          identityCard: `IdCard/${identityCard.filename}`,
        },
      });

      res.status(201).json(shape.appliedCandidates(req)(row));
    } catch (error) {
      next(error);
    }
  }
);

export default router;
