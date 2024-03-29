import { GraphQLObjectType, GraphQLString } from "graphql";
import { Authority } from "./authority";
import { Coordinate } from "./coordinate";

export const User = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLString,
      resolve: (user) => user.id,
    },
    username: {
      type: GraphQLString,
      resolve: (user) => user.username,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user?.email,
    },
    authority: {
      type: Authority,
      resolve: (user) => user?.authority,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user?.createdAt,
    },
    position: {
      type: Coordinate,
      resolve: (user) => user.position,
    }
  },
});
