import { GraphQLObjectType, GraphQLString } from "graphql";

export const Decision = new GraphQLObjectType({
  name: "Decision",
  fields: {
    wip: {
      type: GraphQLString,
      resolve: () => "This is still wip.",
    },
  },
});
