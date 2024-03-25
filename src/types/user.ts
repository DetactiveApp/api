import { GraphQLEnumType, GraphQLObjectType, GraphQLString } from "graphql";
import { Authorizer } from "./authorizer";

export const User = new GraphQLObjectType({
  name: "User",
  fields: {
    uuid: {
      type: GraphQLString,
      resolve: (user) => user.uuid,
    },
    authorizer: {
      type: Authorizer,
      resolve: (user) => user?.authorizer,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user?.createdAt,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user?.email,
    },
    username: {
      type: GraphQLString,
      resolve: (user) => user.username,
    },
  },
});
