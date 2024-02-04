import { GraphQLError } from "graphql";

export {
  ValidationWrongCredentialsError,
  ValidationMissingCredentialsError,
  ValidationExistCredentialsError,
  ValidationEMailInvalidError,
  ValidationPasswordInvalidError,
  ValidationUsernameInvalidError,
} from "./validation";

export const UnexpectedError = new GraphQLError("unexpected");
