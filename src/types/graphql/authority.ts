import { GraphQLEnumType } from "graphql";

export const Authority = new GraphQLEnumType({
    name: "Authority",
    values: {
        "detactive": { value: "detactive" }
    },
});
