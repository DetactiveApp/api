import { GraphQLError } from "graphql";

export * from "./authorization";
export * from "./validation";
export * from "./items";

export const UnexpectedError = new GraphQLError("unexpected");
