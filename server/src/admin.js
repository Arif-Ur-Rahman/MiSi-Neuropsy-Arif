import AdminJS, { ComponentLoader } from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource, getModelByName } from "@adminjs/prisma";
import uploadFeature from "@adminjs/upload";
import session from "express-session";
import { prisma } from "./prisma.js";

AdminJS.registerAdapter({ Database, Resource });

// @adminjs/upload's local provider builds the browser URL as `/<bucket>/<key>`
// and derives the write path by stripping that leading slash. Both only work if
// the bucket is relative to the process working directory -- an absolute path
// yields broken preview links and writes files to the wrong place. index.js
// chdir()s to the server root at boot so this stays correct.
const MEDIA_BUCKET = "media";

const componentLoader = new ComponentLoader();

const IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"];

/**
 * Wires an image column up to a file picker in the admin.
 *
 * `folder` reproduces Django's upload_to, so newly uploaded files land beside
 * the ones imported from the old backend and the stored path stays relative.
 */
const imageUpload = (property, folder) =>
  uploadFeature({
    // The record is created before the file is stored, so the underlying column
    // is nullable in the schema; the picker below is what enforces an image.
    componentLoader,
    provider: { local: { bucket: MEDIA_BUCKET } },
    properties: {
      key: property,
      file: `${property}File`,
      filePath: `${property}Path`,
      filesToDelete: `${property}ToDelete`,
    },
    uploadPath: (record, filename) => `${folder}/${filename}`,
    validation: { mimeTypes: IMAGE_TYPES },
  });

const contentGroup = { name: "Content", icon: "Image" };
const submissionsGroup = { name: "Submissions", icon: "Inbox" };

const resource = (modelName, options, features = []) => ({
  resource: { model: getModelByName(modelName), client: prisma },
  options,
  features,
});

export const admin = new AdminJS({
  rootPath: "/admin",
  componentLoader,
  branding: {
    companyName: "MiSi NeuroPsy",
    withMadeWithLove: false,
  },
  resources: [
    resource(
      "HeroSlider",
      {
        navigation: contentGroup,
        listProperties: ["id", "title", "heroImage"],
        properties: { heroImage: { isVisible: { list: true, edit: false, show: true, filter: false } } },
      },
      [imageUpload("heroImage", "Hero")]
    ),
    resource(
      "Award",
      { navigation: contentGroup, listProperties: ["id", "title", "heroImage"] },
      [imageUpload("heroImage", "Award")]
    ),
    resource(
      "Service",
      { navigation: contentGroup, listProperties: ["id", "name", "href", "image"] },
      [imageUpload("image", "Service")]
    ),
    resource(
      "WhyChooseUs",
      {
        navigation: contentGroup,
        listProperties: ["id", "title", "image"],
        properties: {
          description: { type: "textarea" },
          // Rendered with dangerouslySetInnerHTML on the public site.
          details_information: { type: "richtext" },
        },
      },
      [imageUpload("image", "ChoiceUS")]
    ),
    resource(
      "SpecialEvent",
      {
        navigation: contentGroup,
        listProperties: ["id", "title", "startDate", "endDate"],
        properties: { description: { type: "textarea" } },
      },
      [imageUpload("image", "Event")]
    ),
    resource(
      "JobsPost",
      {
        navigation: contentGroup,
        listProperties: ["id", "title", "category", "vacancy", "endDate"],
        properties: {
          description: { type: "textarea" },
          created_at: { isVisible: { list: false, edit: false, show: true, filter: false } },
        },
      },
      [imageUpload("image", "Jobs")]
    ),

    resource("ContactForm", {
      navigation: submissionsGroup,
      listProperties: ["id", "name", "email", "subject"],
      properties: { message: { type: "textarea" } },
      actions: { new: { isAccessible: false } },
    }),
    resource("ClientCouncil", {
      navigation: submissionsGroup,
      listProperties: ["id", "name", "phone"],
      properties: { message: { type: "textarea" } },
      actions: { new: { isAccessible: false } },
    }),
    resource("AppliedCandidates", {
      navigation: submissionsGroup,
      listProperties: ["id", "name", "email", "postName", "created_at"],
      actions: { new: { isAccessible: false } },
    }),
  ],
});

export const buildAdminRouter = () => {
  const { ADMIN_EMAIL, ADMIN_PASSWORD, SESSION_SECRET } = process.env;

  return AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate: async (email, password) =>
        email === ADMIN_EMAIL && password === ADMIN_PASSWORD
          ? { email, title: "Administrator" }
          : null,
      cookieName: "misi-admin",
      cookiePassword: SESSION_SECRET,
    },
    null,
    {
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { httpOnly: true, secure: process.env.NODE_ENV === "production" },
    }
  );
};

// Re-exported so index.js can pull in express-session's types alongside.
export { session };
