import {
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { User, Validation } from "../types";
import { dbClient } from "..";

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
        const user = await dbClient.user.findFirst({
          where: {
            ...(args.uuid ? { uuid: args.uuid } : { uuid: context.user.uuid }),
          },
        });
        return user;
      },
      args: {
        uuid: {
          type: GraphQLString,
        },
      },
    },
  },
});
