/**
 * Shapes rows into the exact JSON the frontend already expects.
 *
 * Two details are load-bearing and match what Django REST Framework emitted:
 * image fields are absolute URLs (built per-request, like build_absolute_uri),
 * and date-only fields stay 'YYYY-MM-DD' rather than becoming timestamps.
 */

export const baseUrlOf = (req) => `${req.protocol}://${req.get("host")}`;

const mediaUrl = (req, storedPath) =>
  storedPath ? `${baseUrlOf(req)}/media/${storedPath}` : null;

const dateOnly = (value) => (value ? value.toISOString().slice(0, 10) : null);

export const heroSlider = (req) => (row) => ({
  id: row.id,
  title: row.title,
  subTitle: row.subTitle,
  heroImage: mediaUrl(req, row.heroImage),
});

export const award = (req) => (row) => ({
  id: row.id,
  title: row.title,
  heroImage: mediaUrl(req, row.heroImage),
});

export const specialEvent = (req) => (row) => ({
  id: row.id,
  title: row.title,
  description: row.description,
  image: mediaUrl(req, row.image),
  startDate: dateOnly(row.startDate),
  endDate: dateOnly(row.endDate),
});

export const whyChooseUs = (req) => (row) => ({
  id: row.id,
  title: row.title,
  description: row.description,
  image: mediaUrl(req, row.image),
  details_information: row.details_information,
});

export const service = (req) => (row) => ({
  id: row.id,
  href: row.href,
  name: row.name,
  description: row.description,
  image: mediaUrl(req, row.image),
});

export const jobsPost = (req) => (row) => ({
  id: row.id,
  title: row.title,
  description: row.description,
  image: mediaUrl(req, row.image),
  category: row.category,
  vacancy: row.vacancy,
  requirement: row.requirement,
  created_at: row.created_at.toISOString(),
  endDate: row.endDate.toISOString(),
});

export const clientCouncil = () => (row) => ({
  id: row.id,
  name: row.name,
  phone: row.phone,
  message: row.message,
});

export const contactForm = () => (row) => ({
  id: row.id,
  name: row.name,
  email: row.email,
  subject: row.subject,
  message: row.message,
});

export const appliedCandidates = (req) => (row) => ({
  id: row.id,
  jobsPostTitle: row.jobsPostTitle,
  name: row.name,
  email: row.email,
  phone: row.phone,
  postName: row.postName,
  cv: mediaUrl(req, row.cv),
  // Capitalised to match the field name the apply form posts.
  IdentityCard: mediaUrl(req, row.identityCard),
  created_at: row.created_at.toISOString(),
});
