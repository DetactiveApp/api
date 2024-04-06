import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../../db";
import { GraphQLFieldConfig, GraphQLList, GraphQLString } from "graphql";
import { Item } from "../../types/graphql";
import { ItemExpiredError, ItemNotFoundError, ItemWrongAuthorityError } from "../../types/graphql/errors";
import { eq } from "drizzle-orm";
import { generateItems } from "../../utils/generators/items";

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const PickUpItem: GraphQLFieldConfig<any, any, any> = {
    type: Item,
    resolve: async (_parent, args, context, _info) => {
        const cItem = await db.query.items.findFirst({ where: eq(schema.items.id, args.itemId) })
        if (!cItem) {
            throw ItemNotFoundError;
        }

        if (cItem.authority != null) {
            throw ItemWrongAuthorityError
        }

        if (cItem.expiration && +(new Date()) > +cItem.expiration) {
            throw ItemExpiredError
        }

        await db.update(schema.items).set({ position: null, authority: context.user.id }).where(eq(schema.items.id, args.itemId)).execute();

        let item = await db.query.items.findFirst({ where: (items, { eq }) => eq(items.id, args.itemId), with: { itemType: true } });
        if (item) {
            item = Object.assign(item, (item.itemType as {}));
            return item;
        }

        throw ItemNotFoundError;
    },
    args: {
        itemId: {
            type: GraphQLString!
        }
    }
}