import { allow, not, rule, shield } from "graphql-shield";
import jwt, { decode } from "jsonwebtoken";
import { db_client } from "..";

const guardRule = rule()(async (parent, args, ctx, info) => {
  const token = ctx.request.headers.authorization.split(" ")[1];
  const uuid = jwt.verify(token, process.env.JWT_KEY!).sub as string;

  if ((await db_client.user.count({ where: { uuid: uuid } })) === 1) {
    return true;
  }

  return false;
});

export const guard = shield(
  {
    Query: {
      "*": guardRule,
    },
    Mutation: {
      signUp: not(guardRule),
      "*": guardRule,
    },
  },
  {
    fallbackRule: allow,
    debug: false,
    allowExternalErrors: false,
    hashFunction: function (arg: { parent: any; args: any }): string {
      throw new Error("Function not implemented.");
    },
  },
);
