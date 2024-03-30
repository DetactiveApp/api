import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../../db";
import { GraphQLFieldConfig, GraphQLString } from "graphql";
import { User } from "../../types/graphql";


const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const UserQuery: GraphQLFieldConfig<any, any, any> = {
    type: User,
    resolve: async (_parent, args, context, _info) => {
        const user = await db.query.users.findFirst({
            where: (users, { eq }) => args.id ? eq(users.id, args.id) : eq(users.id, context.user.id)
        });
        return user;
    },
    args: {
        id: {
            type: GraphQLString,
        },
    },
}