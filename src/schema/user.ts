import { GraphQLObjectType, GraphQLString } from "graphql";

export const User = new GraphQLObjectType({
  name: "User",
  fields: {
    uuid: {
      type: GraphQLString,
      resolve: (user) => user?.uuid,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user?.email,
    },
    secret: {
      type: GraphQLString,
      resolve: (user) => user?.secret,
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
