import jwt from "jsonwebtoken";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../../db";
import { GraphQLFieldConfig, GraphQLString } from "graphql";
import { Authority, Token } from "../../types/graphql";
import Validations from "../../../configs/validations.json";
import { ValidationEMailInvalidError, ValidationMissingCredentialsError, ValidationPasswordInvalidError, ValidationUsernameInvalidError } from "../../types/graphql/errors";


const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const SignUpMutation: GraphQLFieldConfig<any, any, any> = {
    type: Token,
    resolve: async (_parent, args, _context, _info) => {
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
}