# MiSi API (Node.js)

Express + Prisma + Postgres replacement for the Django backend in `../BackEnd`.
The JSON it serves is byte-for-byte identical to what DRF produced, so the
Next.js frontend needs no changes.

## Running it

Requires Postgres. On macOS: `brew install postgresql@16 && brew services start postgresql@16`.

```bash
createdb misi
cp .env.example .env          # then edit DATABASE_URL and the admin credentials
npm install
npx prisma migrate deploy     # create the tables
npm run import:sqlite         # content rows out of the old Django DB
cp -R ../BackEnd/media/. media/   # the images those rows point at
npm run dev
```

`media/` is gitignored — it holds runtime state (admin uploads, submitted CVs and
ID scans), so it is not something to commit. The content images live in git under
`../BackEnd/media` and the copy step above seeds them. Keep that folder around
until media moves to object storage, or the images exist only on whichever
machine last ran the admin.

- API — http://127.0.0.1:8000/api
- Admin — http://127.0.0.1:8000/admin
- Media — http://127.0.0.1:8000/media

The frontend's `NEXT_PUBLIC_BACKEND_URL` already points at port 8000, so nothing
changes on that side.

## Endpoints

Same paths and payloads as the Django version.

| Method | Path | Notes |
| --- | --- | --- |
| GET | `/api/hero-slider/` | |
| GET | `/api/award/` | |
| GET | `/api/special-event/` | dates are `YYYY-MM-DD` |
| GET | `/api/why-choose-us/` | |
| GET | `/api/why-choose-us/:id` | |
| GET | `/api/service/` | |
| GET | `/api/jobs/` | |
| GET | `/api/jobs/:id` | |
| POST | `/api/client-council/` | JSON |
| POST | `/api/contact-form/` | JSON |
| POST | `/api/applied-candidates/` | multipart: `cv`, `IdentityCard` |

Image fields come back as absolute URLs built from the incoming request, the
same way DRF's `build_absolute_uri` did.

## Admin

`/admin` is an AdminJS panel standing in for the Django admin. It logs in with
the single `ADMIN_EMAIL` / `ADMIN_PASSWORD` pair from `.env` — there is no user
table, so change those to rotate access.

Image pickers write into the same folders Django used (`Hero/`, `Award/`,
`Service/`, `ChoiceUS/`, `Event/`, `Jobs/`) and store a relative path, so files
imported from the old backend and newly uploaded ones sit side by side.

Two constraints worth knowing before editing this code:

- The upload provider resolves its bucket against the working directory, so
  `src/index.js` calls `process.chdir()` to the server root at boot. An absolute
  bucket path silently writes files to the wrong place.
- The image columns are nullable because AdminJS creates the record first and
  attaches the file afterwards. The admin's file picker is what enforces an
  image, not the database.

## Deploying

Sessions are stored in memory, which is fine for a single process but resets on
restart and does not work across multiple instances. Add a session store backed
by Postgres or Redis before scaling out.

Uploaded files live on the local disk. On a host with an ephemeral filesystem
(Render, Fly, Railway) they vanish on redeploy — swap the upload provider for S3
or Cloudinary there.
