import { relations } from 'drizzle-orm';
import { integer, pgTable, real, uuid, varchar } from 'drizzle-orm/pg-core';
import { items } from './items';

export const itemTypes = pgTable('itemTypes', {
    id: uuid('id').primaryKey().unique().defaultRandom().notNull(),
    name: varchar('name', { length: 32 }).unique().notNull(),
    spawnProbability: real('spawnProbability').notNull(),
    minExpiration: integer('minExpiration').notNull().default(240),
    maxExpiration: integer('maxExpiration').notNull().default(1440),
});

export const itemTypesRelation = relations(itemTypes, ({ many }) => ({
    item: many(items)
}))