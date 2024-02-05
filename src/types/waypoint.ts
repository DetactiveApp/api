import { GraphQLObjectType, GraphQLString } from "graphql";

export const Waypoint = new GraphQLObjectType({
  name: "Waypoint",
  fields: {
    uuid: {
      type: GraphQLString,
      resolve: (waypoint) => waypoint.uuid,
    },
    placeType: {
      type: GraphQLString,
      resolve: (waypoint) => waypoint.placeType,
    },
  },
});
