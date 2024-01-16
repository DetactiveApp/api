import yoga from "@elysiajs/graphql-yoga";
import { Elysia } from "elysia";
import { resolvers } from "./resolvers";

const api_version = require('../package.json').version;

new Elysia()
    .use(
        yoga({
            typeDefs: await Bun.file("src/types/index.graphql").text(),
            resolvers: resolvers
        })
    )
    .get("/", `Detactive API v${api_version}`)
    .listen(3000)