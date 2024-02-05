import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Game, Story, User, Validation } from "../types";
import { dbClient } from "..";

export const query = new GraphQLObjectType({
  name: "Queries",
  fields: {
    ping: {
      type: GraphQLString,
      resolve: () => "Pong!",
    },
    validation: {
      type: Validation,
      resolve: () => Validation,
    },
    story: {
      type: Story,
      resolve: async (parent, args, context, info) => {
        const story = await dbClient.story.findFirst({
          where: { ...(args.uuid ? { uuid: args.uuid } : {}) },
        });
        return story;
      },
      args: {
        uuid: {
          type: GraphQLString,
        },
      },
    },
    stories: {
      type: new GraphQLList(Story),
      resolve: async (_parent, args, _context, _info) => {
        const stories = await dbClient.story.findMany({
          where: { ...(args.active ? { active: args.active } : {}) },
        });
        return stories;
      },
      args: {
        active: {
          type: GraphQLBoolean,
        },
      },
    },
    user: {
      type: User,
      resolve: async (_parent, args, context, _info) => {
        const user = await dbClient.user.findFirst({
          where: {
            ...(args.uuid ? { uuid: args.uuid } : { uuid: context.user.uuid }),
          },
        });
        return user;
      },
      args: {
        uuid: {
          type: GraphQLString,
        },
      },
    },
    game: {
      type: Game,
      resolve: (_parent, args, context, _info) =>
        dbClient.game.findFirst({
          where: {
            ...(args.uuid ? { uuid: args.uuid } : {}),
            userUuid: context.user.uuid,
          },
        }),
      args: {
        uuid: {
          type: GraphQLString,
        },
      },
    },
    games: {
      type: new GraphQLList(Game),
      resolve: (_parent, _args, context, _info) =>
        dbClient.game.findMany({
          where: {
            userUuid: context.user.uuid,
          },
          orderBy: {
            createdAt: "desc",
          },
        }),
    },
  },
});
