ALTER TABLE "itemTypes" ADD COLUMN "minExpiration" integer DEFAULT 240 NOT NULL;--> statement-breakpoint
ALTER TABLE "itemTypes" ADD COLUMN "maxExpiration" integer DEFAULT 1440 NOT NULL;