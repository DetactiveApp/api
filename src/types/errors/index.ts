import { GraphQLError } from "graphql";

export {
  ValidationWrongCredentialsError,
  ValidationMissingCredentialsError,
  ValidationExistCredentialsError,
} from "./validation";

export const UnexpectedError = new GraphQLError("unexpected");
