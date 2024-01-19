import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

export const db_client = new PrismaClient();
const api_version = require("../package.json").version;

const yoga = createYoga({ cors: false, schema: schema });

new Elysia()
  .get("/", `Detactive API v${api_version}`)
  .get("/graphql", ({ request }) => yoga.fetch(request))
  .post("/graphql", ({ request }) => yoga.fetch(request))
  .listen(3000);
