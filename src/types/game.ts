import { GraphQLObjectType, GraphQLString } from "graphql";
import { Story } from "./story";

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
  },
});
