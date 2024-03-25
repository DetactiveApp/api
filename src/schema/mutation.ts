import { GraphQLObjectType, GraphQLString } from "graphql";
import { Game, GameStep, Token, User } from "../types";
import { dbClient } from "..";
import {
  ValidationEMailInvalidError,
  ValidationExistCredentialsError,
  ValidationMissingCredentialsError,
  ValidationPasswordInvalidError,
  ValidationUsernameInvalidError,
  ValidationWrongCredentialsError,
} from "../types/errors";
import { Prisma } from "../../prisma/generated/client";
import Validations from "../../configs/validations.json";
import jwt from "jsonwebtoken";

export const mutation = new GraphQLObjectType({
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
    createGame: {
      type: Game,
      resolve: (_parent, args, context, _info) =>
        dbClient.game.create({
          data: {
            storyUuid: args.storyUuid,
            userUuid: context.user.uuid,
          },
        }),
      args: {
        storyUuid: {
          type: GraphQLString,
        },
      },
    },
    nextStep: {
      type: GameStep,
      resolve: (_parent, args, context, _info) => {},
      args: {
        gameUuid: {
          type: GraphQLString,
        },
      },
    },
    signUp: {
      type: Token,
      resolve: async (_parent, args, _context, _info) => {
        if (!new RegExp(Validations.username).test(args.username)) {
          throw ValidationUsernameInvalidError;
        }

        if (!new RegExp(Validations.email).test(args.email)) {
          throw ValidationEMailInvalidError;
        }

        if (!new RegExp(Validations.password).test(args.password)) {
          throw ValidationPasswordInvalidError;
        }

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
});
