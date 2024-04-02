import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { authorityEnum, dtCoordinates } from './types';
import { relations } from 'drizzle-orm';
import { items } from './items';


export const users = pgTable('users', {
    id: uuid('id').primaryKey().unique().defaultRandom().notNull(),
    username: varchar('username', { length: 32 }).unique().notNull(),
    email: varchar('email', { length: 320 }).notNull(),
    createdAt: timestamp('createdAt', { mode: "date" }).defaultNow().notNull(),
    secret: text('secret').notNull(),
    authority: authorityEnum('authority').notNull(),
    position: dtCoordinates('position')
});


export const usersRelations = relations(users, ({ many }) => ({
    items: many(items)
}))