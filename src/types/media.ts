import { GraphQLEnumType } from "graphql";

export const Media = new GraphQLEnumType({
    name: "Media",
    values: {
        AUDIO: { value: 0 },
        IMAGE: { value: 1 },
        VIDEO: { value: 2 }
    }
})