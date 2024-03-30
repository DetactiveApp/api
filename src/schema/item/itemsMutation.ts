import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../../db";
import { GraphQLFieldConfig, GraphQLList } from "graphql";
import { CoordinateInput, Item } from "../../types/graphql";
import { ItemPositionMissingError } from "../../types/graphql/errors";
import { eq } from "drizzle-orm";
import { generateItems } from "../../utils/generators/items";

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const ItemsMutation: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLList(Item),
    resolve: async (_parent, args, context, _info) => {
        if (!args.position) {
            throw ItemPositionMissingError;
        }
        db.update(schema.users).set({ position: JSON.stringify(args.position) }).where(eq(schema.users.id, context.user.id)).execute()
        return await generateItems({ latitude: args.position.latitude, longitude: args.position.longitude })
    },
    args: {
        position: {
            type: CoordinateInput!
        }
    }
}