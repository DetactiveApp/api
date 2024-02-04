import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import jwt from "jsonwebtoken";
import { Game, User, Token, Story, Validation } from "./types";
import { dbClient } from ".";
import { Coordinates } from "./types/coordinates";
import {
  ValidationExistCredentialsError,
  ValidationMissingCredentialsError,
  ValidationWrongCredentialsError,
} from "./types/errors";
import { Prisma } from "@prisma/client";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
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
        resolve: async (parent, args, context, info) => {
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
        resolve: async (parent, args, context, info) => {
          const user = await dbClient.user.findFirst({
            where: {
              ...(args.uuid
                ? { uuid: args.uuid }
                : { uuid: context.user.uuid }),
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
    },
  }),
  mutation: new GraphQLObjectType({
    name: "Mutations",
    fields: {
      user: {
        type: User,
        resolve: async (_parent, args, context, _info) => {
          return await dbClient.user.update({
            data: {
              email: args.storyUuid,
            },
            where: { uuid: context.user.uuid },
          });
        },
        args: {
          email: {
            type: GraphQLString,
          },
        },
      },
      start: {
        type: Game,
        resolve: async (_parent, args, context, _info) => {
          const userCoordinates: Coordinates = {
            latitude: args.userCoordinates.latitude,
            longitude: args.userCoordinates.longitude,
          };

          const game = dbClient.game.create({
            data: {
              storyUuid: args.storyUuid,
              userUuid: context.user.uuid,
            },
          });

          return { game, userCoordinates };
        },
        args: {
          storyUuid: {
            type: GraphQLString,
          },
          userCoordinates: {
            type: new GraphQLInputObjectType({
              name: "UserCoordinates",
              fields: {
                latitude: {
                  type: GraphQLFloat,
                },
                longitude: {
                  type: GraphQLFloat,
                },
              },
            }),
          },
        },
      },
      signUp: {
        type: Token,
        resolve: async (parent, args, context, info) => {
          const user = await dbClient.user
            .create({
              data: {
                email: args.email,
                secret: await Bun.password.hash(args.password),
                username: args.username,
              },
              select: {
                uuid: true,
              },
            })
            .catch((err: Prisma.PrismaClientKnownRequestError) => {
              if (err.code == "P2002") {
                // https://www.prisma.io/docs/orm/reference/error-reference#p2002
                throw ValidationExistCredentialsError;
              }
            });

          if (!user) {
            throw ValidationMissingCredentialsError;
          }

          return jwt.sign({ user: user.uuid }, process.env.JWT_KEY!);
        },
        args: {
          email: {
            type: GraphQLString!,
          },
          password: {
            type: GraphQLString!,
          },
          username: {
            type: GraphQLString!,
          },
        },
      },
      signIn: {
        type: Token,
        resolve: async (_parent, args, _context, _info) => {
          const user = await dbClient.user.findFirst({
            where: {
              email: args.email,
            },
          });

          if (!user) {
            throw ValidationWrongCredentialsError;
          }

          if (await Bun.password.verify(args.password, user.secret)) {
            return jwt.sign({ user: user.uuid }, process.env.JWT_KEY!);
          }

          throw ValidationWrongCredentialsError;
        },
        args: {
          email: {
            type: GraphQLString,
          },
          password: {
            type: GraphQLString,
          },
        },
      },
    },
  }),
});
