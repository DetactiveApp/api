import { GraphQLError } from "graphql";

export * from "./authorization";
export * from "./validation";

export const UnexpectedError = new GraphQLError("unexpected");
