import { GraphQLError } from "graphql";

export {
  ValidationWrongCredentialsError,
  ValidationMissingCredentialsError,
} from "./validation";

export const UnexpectedError = new GraphQLError("unexpected");
