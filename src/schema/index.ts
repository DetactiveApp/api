import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { Story } from "./story";
import { db_client } from "..";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
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
          const stories = Object.keys(args).length === 0
              ? await db_client.story.findMany()
              : await db_client.story.findMany({where: {active: args.active}})
          return stories;
        },
        args: {
          active: {
            type: GraphQLBoolean
          }
        }
      },
    },
  }),
});
