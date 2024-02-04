import { GraphQLError } from "graphql";

export const ValidationWrongCredentialsError = new GraphQLError(
  "validation.credentials.wrong",
);

export const ValidationMissingCredentialsError = new GraphQLError(
  "validation.credentials.missing",
);

export const ValidationExistCredentialsError = new GraphQLError(
  "validation.credentials.exist",
);

export const ValidationUsernameInvalidError = new GraphQLError(
  "validation.username.invalid",
);

export const ValidationEMailInvalidError = new GraphQLError(
  "validation.email.invalid",
);

export const ValidationPasswordInvalidError = new GraphQLError(
  "validation.password.invalid",
);
