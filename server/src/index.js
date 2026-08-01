import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import apiRouter, { MEDIA_ROOT } from "./routes/api.js";
import { admin, buildAdminRouter } from "./admin.js";

// AdminJS's local upload provider resolves its bucket against the working
// directory, so pin it to the server root instead of wherever we were launched.
process.chdir(path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."));

const app = express();
const PORT = Number(process.env.PORT ?? 8000);

// Needed for correct absolute media URLs when deployed behind a proxy.
app.set("trust proxy", 1);

const allowedOrigins = (process.env.CORS_ORIGINS ?? "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({ origin: allowedOrigins }));

// The admin router does its own body parsing, so mount it before the global
// JSON/urlencoded parsers.
app.use(admin.options.rootPath, buildAdminRouter());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/media", express.static(MEDIA_ROOT));
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.json({ status: "ok", admin: admin.options.rootPath, api: "/api" });
});

app.use((req, res) => {
  res.status(404).json({ detail: "Not found." });
});

// eslint-disable-next-line no-unused-vars -- express identifies error handlers by arity
app.use((error, req, res, next) => {
  console.error(error);
  const status = error.status ?? 500;
  res.status(status).json({ detail: error.message ?? "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`API      http://127.0.0.1:${PORT}/api`);
  console.log(`Admin    http://127.0.0.1:${PORT}${admin.options.rootPath}`);
  console.log(`Media    http://127.0.0.1:${PORT}/media`);
});
