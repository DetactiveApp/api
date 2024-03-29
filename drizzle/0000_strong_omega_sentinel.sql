DO $$ BEGIN
 CREATE TYPE "authority" AS ENUM('detactive');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" varchar(32),
	"email" varchar(320),
	"createdAt" timestamp DEFAULT now(),
	"secret" text,
	"authority" "authority",
	CONSTRAINT "users_id_unique" UNIQUE("id")
);
