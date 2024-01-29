import { GraphQLObjectType, GraphQLString } from "graphql";
import { Coordinates, GameStep, Story } from ".";
import { dbClient } from "..";
import { nextCoordinate } from "../geo";

export const Game = new GraphQLObjectType({
  name: "Game",
  fields: {
    uuid: {
      type: GraphQLString,
      resolve: ({ game }) => game.uuid,
    },
    createdAt: {
      type: GraphQLString,
      resolve: ({ game }) => game.createdAt,
    },
    finishedAt: {
      type: GraphQLString,
      resolve: ({ game }) => game.finishedAt,
    },
    story: {
      type: Story,
      resolve: ({ game }) => game.story,
    },
    nextStep: {
      type: GameStep,
      resolve: async ({ game, userCoordinates }) => {
        const currentGameStep = await dbClient.gameStep.findFirst({
          where: {
            gameUuid: game.uuid,
            finishedAt: null
          },
          orderBy: {
            createdAt: 'desc'
          }
        });

        if (!currentGameStep) {
          // TODO: Create first game step
        } else {
          const currentStep = (await dbClient.gameStep.update({
            where: {
              gameUuid_stepUuid: {
                gameUuid: game.uuid,
                stepUuid: currentGameStep.stepUuid,
              },
              NOT: [{ finishedAt: null }]
            },
            data: {
              finishedAt: new Date(),
              updatedAt: new Date()
            }
          }));

          const nextStepUuid = (await dbClient.decision.findFirst({
            where: {
              stepInputUuid: currentStep.stepUuid,
            }
          }))?.stepOutputUuid;


          if (!nextStepUuid) {
            return null;
          }

          const lastCoordinates: Coordinates = { latitude: currentGameStep.latitude, longitude: currentGameStep.longitude };
          const coordinates = await nextCoordinate(userCoordinates, lastCoordinates);

          return (await dbClient.gameStep.create({
            data: {
              gameUuid: game.uuid,
              stepUuid: nextStepUuid,
              latitude: coordinates.latitude,
              longitude: coordinates.longitude
            }
          }));
        }
      }
    },
  },
});