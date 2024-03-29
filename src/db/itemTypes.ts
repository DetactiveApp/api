import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const itemTypes = pgTable('itemTypes', {
    id: uuid('id').primaryKey().unique().defaultRandom().notNull(),
    name: varchar('name', { length: 32 }).unique().notNull()
});