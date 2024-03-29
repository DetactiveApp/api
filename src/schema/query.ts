import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import {
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import { User, Validation } from "../types/graphql";

import * as schema from "../db";

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const query = new GraphQLObjectType({
  name: "Queries",
  fields: {
    ping: {
      type: GraphQLString,
      resolve: () => "Pong!",
    },
    validation: {
      type: Validation,
      resolve: () => Validation,
    },
    user: {
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
    },
  },
});
