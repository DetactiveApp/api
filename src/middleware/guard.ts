import { allow, rule, shield } from "graphql-shield";
import jwt from "jsonwebtoken";
import { dbClient } from "..";
import { AuthorizationNotAuthorized } from "../types/errors/authorization";

const guardRule = rule()(async (_parent, _args, ctx, _info) => {
  const token = ctx.request.headers.get("authorization").split(" ")[1];
  const user = (jwt.verify(token, process.env.JWT_KEY!) as jwt.JwtPayload).user;

  if ((await dbClient.user.count({ where: { uuid: user } })) === 1) {
    ctx.user = { uuid: user };
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
