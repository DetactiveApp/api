import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import jwt from "jsonwebtoken";
import { Story } from "./story";
import { db_client } from "..";
import { Token } from "./authorization";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      ping: {
        type: GraphQLString,
        resolve: () => "Pong!",
      },
      story: {
        type: Story,
        resolve: async (parent, args, context, info) => {
          const story =
            Object.keys(args).length === 0
              ? await db_client.story.findFirst()
              : await db_client.story.findFirst({ where: { uuid: args.uuid } });
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
          const stories =
            Object.keys(args).length === 0
              ? await db_client.story.findMany()
              : await db_client.story.findMany({
                  where: { active: args.active },
                });
          return stories;
        },
        args: {
          active: {
            type: GraphQLBoolean,
          },
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      signUp: {
        type: Token,
        resolve: async (parent, args, context, info) => {
          const user = await db_client.user.create({
            data: {
              email: args.email,
              secret: await Bun.password.hash(args.password),
              firstName: args.firstName,
              lastName: args.lastName,
            },
            select: {
              uuid: true,
            },
          });

          if (!user) {
            throw new Error("Wrong password.");
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
          firstName: {
            type: GraphQLString!,
          },
          lastName: {
            type: GraphQLString!,
          },
        },
      },
      signIn: {
        type: Token,
        resolve: async (parent, args, context, info) => {
          const user = await db_client.user.findFirst({
            where: {
              email: args.email,
            },
          });

          if (!user) {
            throw new Error("Not found.");
          }

          if (await Bun.password.verify(args.password, user.secret)) {
            return jwt.sign({ user: user.uuid }, process.env.JWT_KEY!);
          }

          throw new Error("Wrong password.");
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
