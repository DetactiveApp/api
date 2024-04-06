import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../../db";
import { GraphQLFieldConfig, GraphQLList } from "graphql";
import { Item } from "../../types/graphql";


const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const MyItemsQuery: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLList(Item),
    resolve: async (_parent, _args, context, _info) => {
        let items = await db.query.items.findMany({
            where: (items, { eq }) => eq(items.authority, context.user.id),
            with: { itemType: true }
        });
        items = items.flatMap((item) => Object.assign(item, (item.itemType as {})));

        return items;
    }
}