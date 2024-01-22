import { GraphQLObjectType, GraphQLString } from "graphql";

export const User = new GraphQLObjectType({
  name: "User",
  fields: {
    uuid: {
      type: GraphQLString,
      resolve: (user) => user?.uuid,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user?.createdAt,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user?.email,
    },
    firstName: {
      type: GraphQLString,
      resolve: (user) => user?.firstName,
    },
    lastName: {
      type: GraphQLString,
      resolve: (user) => user?.lastName,
    },
  },
});
