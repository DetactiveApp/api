import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

export const Story = new GraphQLObjectType({
  name: "Story",
  fields: {
    uuid: {
      type: GraphQLString,
      resolve: (story) => story.uuid,
    },
    title: {
      type: GraphQLString,
      resolve: (story) => story.title,
    },
    description: {
      type: GraphQLString,
      resolve: (story) => story.description,
    },
    active: {
      type: GraphQLBoolean,
      resolve: (story) => story.active,
    },
  },
});
