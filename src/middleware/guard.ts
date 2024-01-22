import { allow, rule, shield } from "graphql-shield";
import jwt from "jsonwebtoken";
import { db_client } from "..";

const guardRule = rule()(async (parent, args, ctx, info) => {
  const token = ctx.request.headers.get("authorization").split(" ")[1];
  const user = (jwt.verify(token, process.env.JWT_KEY!) as jwt.JwtPayload).user;

  if ((await db_client.user.count({ where: { uuid: user } })) === 1) {
    ctx.user = { uuid: user };
    return true;
  }

  return false;
});

export const guard = shield(
  {
    Query: {
      ping: allow,
    },
    Mutation: {
      signUp: allow,
      signIn: allow,
    },
  },
  {
    allowExternalErrors: true,
    fallbackRule: guardRule,
    fallbackError: new Error("Not Authorized."),
  },
);
