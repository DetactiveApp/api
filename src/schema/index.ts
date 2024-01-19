import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
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
    },
  }),
});
