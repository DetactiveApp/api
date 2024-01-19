import yoga from "@elysiajs/graphql-yoga";
import { Elysia } from "elysia";
import { typeDefs, resolvers } from "./schema";
import {  PrismaClient } from "@prisma/client";

export const db_client = new PrismaClient()
const api_version = require('../package.json').version;

new Elysia()
    .use(
        yoga({
            typeDefs: typeDefs,
            resolvers: resolvers
        })
    )
    .get("/", `Detactive API v${api_version}`)
    .listen(3000)