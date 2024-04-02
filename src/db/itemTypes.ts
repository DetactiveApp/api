import { relations } from 'drizzle-orm';
import { pgTable, real, uuid, varchar } from 'drizzle-orm/pg-core';
import { items } from './items';

export const itemTypes = pgTable('itemTypes', {
    id: uuid('id').primaryKey().unique().defaultRandom().notNull(),
    name: varchar('name', { length: 32 }).unique().notNull(),
    spawnProbability: real('spawnProbability').notNull(),
});

export const itemTypesRelation = relations(itemTypes, ({ many }) => ({
    item: many(items)
}))