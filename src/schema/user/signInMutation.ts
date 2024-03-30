import jwt from "jsonwebtoken";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../../db";
import { GraphQLFieldConfig, GraphQLString } from "graphql";
import { Token } from "../../types/graphql";
import { ValidationWrongCredentialsError } from "../../types/graphql/errors";


const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const SignInMutation: GraphQLFieldConfig<any, any, any> = {
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
}