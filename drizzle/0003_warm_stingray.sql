ALTER TABLE "items" DROP CONSTRAINT "items_itemType_itemTypes_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "items" ADD CONSTRAINT "items_itemType_itemTypes_id_fk" FOREIGN KEY ("itemType") REFERENCES "itemTypes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
