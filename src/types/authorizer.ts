import { GraphQLEnumType, GraphQLString } from "graphql";

export const Authorizer = new GraphQLEnumType({
    name: "Authorizer",
    values: {
        "DETACTIVE": { value: 0 }
    },
});
