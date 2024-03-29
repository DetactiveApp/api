import { allow, rule, shield } from "graphql-shield";
import jwt from "jsonwebtoken";
import { AuthorizationNotAuthorized } from "../types/graphql/errors/authorization";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db";
import { count } from "drizzle-orm";

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const guardRule = rule()(async (_parent, _args, ctx, _info) => {
  const token = ctx.request.headers.get("authorization").split(" ")[1];
  const user = (jwt.verify(token, process.env.JWT_KEY!) as jwt.JwtPayload).sub;

  const fetchedUsers = (await db.select({ count: count() }).from(schema.users))[0].count

  if (fetchedUsers && fetchedUsers === 1) {
    ctx.user = { id: user };
    return true;
  }

  return false;
});

export const guard = shield(
  {
    Queries: {
      ping: allow,
      validation: allow,
      "*": guardRule,
    },
    Mutations: {
      signUp: allow,
      signIn: allow,
      "*": guardRule,
    },
  },
  {
    allowExternalErrors: true,
    fallbackError: AuthorizationNotAuthorized,
  },
);
