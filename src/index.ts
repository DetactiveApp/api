import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { createYoga } from "graphql-yoga";
import { middleware } from "./middleware";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

const apiVersion = require("../package.json").version;

const yoga = createYoga({
  cors: false,
  schema: middleware,
  graphiql: process.env.NODE_ENV === "development",
});

new Elysia()
  .use(cors())
  .get("/graphql", async ({ request }) => yoga.fetch(request))
  .post("/graphql", async ({ request }) => yoga.fetch(request))
  .get("/", `Detactive API v${apiVersion}`)
  .listen(8080);
