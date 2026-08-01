-- AlterTable
ALTER TABLE "award" ALTER COLUMN "heroImage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "hero_slider" ALTER COLUMN "heroImage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "jobs_post" ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "service" ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "special_event" ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "why_choose_us" ALTER COLUMN "image" DROP NOT NULL;
