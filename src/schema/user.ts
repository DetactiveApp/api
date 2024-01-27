import { GraphQLObjectType, GraphQLString } from "graphql";

export const User = new GraphQLObjectType({
  name: "User",
  fields: {
    uuid: {
      type: GraphQLString,
      resolve: (user) => user.uuid,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user?.createdAt,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user?.email,
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
