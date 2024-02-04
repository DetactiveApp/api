import { GraphQLError } from "graphql";

export const AuthorizationNotAuthorized = new GraphQLError(
  "authorization.notauthorized",
);
