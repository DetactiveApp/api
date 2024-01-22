import { applyMiddleware } from "graphql-middleware";
import { schema } from "../schema";
import { guard } from "./guard";

export const middleware = applyMiddleware(schema, guard);
