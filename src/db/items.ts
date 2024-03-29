import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { dtCoordinates } from './types';
import { users } from './users';
import { itemTypes } from './itemTypes';

export const items = pgTable('items', {
    id: uuid("id").primaryKey().unique().defaultRandom(),
    itemType: uuid("itemType").references(() => itemTypes.id),
    authority: uuid("authority").references(() => users.id, { onDelete: "cascade" }),
    expiration: timestamp('expiration', { mode: "date" }),
    position: dtCoordinates('position')
});