import { GraphQLObjectType, GraphQLString } from "graphql";

export const Token = new GraphQLObjectType({
    name: "Token",
    fields: {
        token: {
            type: GraphQLString,
            resolve: (token) => `Bearer ${token}`,
        },
    },
});
