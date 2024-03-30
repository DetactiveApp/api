import { GraphQLError } from "graphql";

export * from "./authorization";
export * from "./validation";
export * from "./item";

export const UnexpectedError = new GraphQLError("unexpected");
