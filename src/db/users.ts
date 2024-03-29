import { pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const authorityEnum = pgEnum('authority', ['detactive']);

export const users = pgTable('users', {
    id: uuid('id').primaryKey().unique().defaultRandom().notNull(),
    username: varchar('username', { length: 32 }).unique().notNull(),
    email: varchar('email', { length: 320 }).notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    secret: text('secret').notNull(),
    authority: authorityEnum('authority').notNull(),
});