import { GraphQLEnumType } from "graphql";

export const Ending = new GraphQLEnumType({
  name: "Ending",
  values: {
    SUCCESS: { value: 0 },
    FAILURE: { value: 1 },
  },
});
