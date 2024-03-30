import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../../db";
import { GraphQLFieldConfig, GraphQLList } from "graphql";
import { Item } from "../../types/graphql";
import { ItemNotFoundError } from "../../types/graphql/errors";


const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const MyItemsQuery: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLList(Item),
    resolve: async (_parent, _args, context, _info) => {
        const items = await db.query.items.findMany({
            where: (items, { eq }) => eq(items.authority, context.user.id)
        });

        let itemTypes = []

        for (const i in items) {
            const item = items[i];
            let itemType = await db.query.itemTypes.findFirst({ where: (itemTypes, { eq }) => eq(itemTypes.id, item.itemType as string) })
            if (!itemType) {
                throw ItemNotFoundError
            }
            Object.assign(itemType, item);
            itemTypes.push(itemType)
        }

        return itemTypes;
    }
}