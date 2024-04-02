import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { dtCoordinates } from './types';
import { users } from './users';
import { itemTypes } from './itemTypes';
import { relations } from 'drizzle-orm';

export const items = pgTable('items', {
    id: uuid("id").primaryKey().unique().defaultRandom().notNull(),
    itemType: uuid("itemType"),
    authority: uuid("authority"),
    expiration: timestamp('expiration', { mode: "date" }),
    position: dtCoordinates('position')
});

export const itemsRelations = relations(items, ({ one }) => ({
    authority: one(users, {
        fields: [items.authority],
        references: [users.id]
    }),
    itemType: one(itemTypes, {
        fields: [items.itemType],
        references: [itemTypes.id],
    })
}))