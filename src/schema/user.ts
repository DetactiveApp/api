import { GraphQLObjectType, GraphQLString } from "graphql";

export const User = new GraphQLObjectType({
  name: "User",
  fields: {
    uuid: {
      type: GraphQLString,
      resolve: (user) => user.uuid,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user.createdAt,
    },
    birthday: {
      type: GraphQLString,
      resolve: (user) => user.birthday,
    },
    username: {
      type: GraphQLString,
      resolve: (user) => user.username,
    },
  },
});
