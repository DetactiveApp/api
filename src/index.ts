import yoga from "@elysiajs/graphql-yoga";
import { Elysia } from "elysia";
import { typeDefs } from "./typedef";
import { resolvers } from "./resolvers";

new Elysia()
    .use(
        yoga({
            typeDefs: typeDefs,
            resolvers: resolvers
        })
    )
    .listen(3000)