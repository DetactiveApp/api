import { GraphQLFloat, GraphQLInputObjectType } from "graphql";

export const UserCoordinates = new GraphQLInputObjectType({
  name: "UserCoordinates",
  fields: {
    latitude: {
      type: GraphQLFloat,
    },
    longitude: {
      type: GraphQLFloat,
    },
  },
});
