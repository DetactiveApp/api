import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../../db";
import { GraphQLFieldConfig, GraphQLString } from "graphql";
import { User } from "../../types/graphql";

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const UserMutation: GraphQLFieldConfig<any, any, any> = {
    type: User,
    resolve: async (_parent, args, _context, _info) => {
        return await db.query.users.findFirst({
            with: {
                email: args.email
            }
        });
    },
    args: {
        email: {
            type: GraphQLString,
        },
    },

}