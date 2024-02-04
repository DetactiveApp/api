import { GraphQLError } from "graphql";

export const ValidationWrongCredentialsError = new GraphQLError(
  "validation.credentials.wrong",
);

export const ValidationMissingCredentialsError = new GraphQLError(
  "validation.credentials.missing",
);
