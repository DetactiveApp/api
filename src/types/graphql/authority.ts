import { GraphQLEnumType } from "graphql";

export const Authority = new GraphQLEnumType({
    name: "Authority",
    values: {
        "DETACTIVE": { value: "DETACTIVE" }
    },
});
