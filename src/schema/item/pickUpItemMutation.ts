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
        let item = await db.query.items.findFirst({ where: eq(schema.items.id, args.itemId) })
        if (!item) {
            throw ItemNotFoundError;
        }

        if (item.authority != null) {
            throw ItemWrongAuthorityError
        }

        if (item.expiration && +(new Date()) > +item.expiration) {
            throw ItemExpiredError
        }

        item = (await db.update(schema.items).set({ position: null, authority: context.user.id }).where(eq(schema.items.id, args.itemId)).returning().execute())[0];
        console.log(item)
        if (!item) {
            throw ItemNotFoundError
        }

        let itemType = await db.query.itemTypes.findFirst({ where: eq(schema.itemTypes.id, item.itemType as string) });

        if (!itemType) {
            throw ItemNotFoundError
        }

        Object.assign(itemType, item)

        return itemType;
    },
    args: {
        itemId: {
            type: GraphQLString!
        }
    }
}