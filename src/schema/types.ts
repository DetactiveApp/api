import { GraphQLObjectType, GraphQLString } from "graphql";

export const StoryGraphQlType = new GraphQLObjectType ({
    name: "User",
    fields: {
        uuid: { type: GraphQLString },
        
    }
});