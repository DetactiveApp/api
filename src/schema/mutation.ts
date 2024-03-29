import jwt from "jsonwebtoken";
import { GraphQLObjectType, GraphQLString } from "graphql";
import Validations from "../../configs/validations.json";
import { Authority, Token, User } from "../types/graphql";
import { ValidationEMailInvalidError, ValidationExistCredentialsError, ValidationMissingCredentialsError, ValidationPasswordInvalidError, ValidationUsernameInvalidError, ValidationWrongCredentialsError } from "../types/graphql/errors";
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from "@neondatabase/serverless";
import * as schema from "../db";

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    user: {
      type: User,
      resolve: async (_parent, args, context, _info) => {
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
    },
    signUp: {
      type: Token,
      resolve: async (_parent, args, _context, _info) => {
        if (args.authority !== "detactive") {
          return;
        }

        if (!new RegExp(Validations.username).test(args.username)) {
          throw ValidationUsernameInvalidError;
        }

        if (!new RegExp(Validations.email).test(args.email)) {
          throw ValidationEMailInvalidError;
        }

        if (!new RegExp(Validations.password).test(args.password)) {
          throw ValidationPasswordInvalidError;
        }

        const user = await db.insert(schema.users).values({ username: args.username, authority: args.authority, email: args.email, secret: await Bun.password.hash(args.password) }).returning({ id: schema.users.id });

        if (!user) {
          throw ValidationMissingCredentialsError;
        }

        return jwt.sign({ sub: user }, process.env.JWT_KEY!);
      },
      args: {
        email: {
          type: GraphQLString!,
        },
        password: {
          type: GraphQLString!,
        },
        username: {
          type: GraphQLString!,
        },
        authority: {
          type: Authority!
        }
      },
    },
    signIn: {
      type: Token,
      resolve: async (_parent, args, _context, _info) => {
        const user = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, args.email)
        });

        if (!user) {
          throw ValidationWrongCredentialsError;
        }

        if (await Bun.password.verify(args.password, user.secret)) {
          return jwt.sign({ sub: user.id }, process.env.JWT_KEY!);
        }

        throw ValidationWrongCredentialsError;
      },
      args: {
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
    },
  },
});
