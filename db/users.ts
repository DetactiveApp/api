import { pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const authorityEnum = pgEnum('authority', ['detactive']);

export const users = pgTable('users', {
    id: uuid('id').primaryKey().unique(),
    username: varchar('username', { length: 32 }),
    email: varchar('email', { length: 320 }),
    createdAt: timestamp('createdAt').defaultNow(),
    secret: text('secret'),
    authority: authorityEnum('authority'),
});