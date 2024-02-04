import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { Media, Waypoint } from ".";

export const Step = new GraphQLObjectType({
  name: "Step",
  fields: {
    uuid: {
      type: GraphQLString,
      resolve: (step) => step.uuid,
    },
    title: {
      type: GraphQLString,
      resolve: (step) => step.title,
    },
    description: {
      type: GraphQLString,
      resolve: (step) => step.description,
    },
    media: {
      type: Media,
      resolve: (step) => step.media,
    },
    assetUrl: {
      type: GraphQLString,
      resolve: (step) => step.assetId,
    },
    ending: {
      type: GraphQLString,
      resolve: (step) => step.ending,
    },
    waypoint: {
      type: Waypoint,
      resolve: (step) => step.waypoint,
    },
  },
});
