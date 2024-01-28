import { GraphQLObjectType, GraphQLString } from "graphql";
import { Step, Story } from ".";

export const Game = new GraphQLObjectType({
    name: "Game",
    fields: {
        uuid: {
            type: GraphQLString,
            resolve: (game) => game.uuid,
        },
        createdAt: {
            type: GraphQLString,
            resolve: (game) => game.createdAt,
        },
        finishedAt: {
            type: GraphQLString,
            resolve: (game) => game.finishedAt,
        },
        story: {
            type: Story,
            resolve: (game) => game.story,
        },
        nextStep: {
            type: Step,
        },
    },
});


/*
resolve: async (game) => {
        const currentGameStep = await db_client.gameStep.findFirst({
          where: {
            gameUuid: game.uuid,
            finishedAt: null
          },
          orderBy: {
            createdAt: 'desc'
          }
        });

        if (!currentGameStep) {
          throw new Error('No unfinished game step found for this game.');
        }

        const currentStepUuid = (await db_client.gameStep.update({
          where: {
            gameUuid_stepUuid: {
              gameUuid: game.uuid,
              stepUuid: currentGameStep.stepUuid,
            },
            NOT: [{ finishedAt: null }]
          },
          data: {
            finishedAt: new Date()
          }
        })).stepUuid;


        const nextStepUuid = (await db_client.decision.findFirst({
          where: {
            stepInputUuid: currentStepUuid,
          }
        }))?.stepOutputUuid;


        if (!nextStepUuid) {
          return null;
        }

        //return db_client.gameStep.create();
      },
*/