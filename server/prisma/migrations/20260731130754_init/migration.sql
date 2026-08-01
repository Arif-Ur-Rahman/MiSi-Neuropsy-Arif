-- CreateTable
CREATE TABLE "hero_slider" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "heroImage" TEXT NOT NULL,

    CONSTRAINT "hero_slider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "award" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "heroImage" TEXT NOT NULL,

    CONSTRAINT "award_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "special_event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,

    CONSTRAINT "special_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "why_choose_us" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "details_information" TEXT,

    CONSTRAINT "why_choose_us_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "href" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_council" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "client_council_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_form" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "contact_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs_post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "vacancy" INTEGER NOT NULL,
    "requirement" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jobs_post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applied_candidates" (
    "id" SERIAL NOT NULL,
    "jobsPostTitle" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "postName" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "identityCard" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "applied_candidates_pkey" PRIMARY KEY ("id")
);
