import { GraphQLFloat, GraphQLObjectType, GraphQLString } from "graphql";
import { Step } from ".";
import { dbClient } from "..";

export const GameStep = new GraphQLObjectType({
  name: "GameStep",
  fields: {
    createdAt: {
      type: GraphQLString,
      resolve: (gameStep) => gameStep.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (gameStep) => gameStep.updatedAt,
    },
    finishedAt: {
      type: GraphQLString,
      resolve: (gameStep) => gameStep.finishedAt,
    },
    latitude: {
      type: GraphQLFloat,
      resolve: (gameStep) => gameStep.latitude,
    },
    longitude: {
      type: GraphQLFloat,
      resolve: (gameStep) => gameStep.longitude,
    },
    step: {
      type: Step,
      resolve: (gameStep) =>
        dbClient.step.findFirst({ where: { uuid: gameStep.stepUuid } }),
    },
  },
});
