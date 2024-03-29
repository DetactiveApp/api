import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { createYoga } from "graphql-yoga";
import { middleware } from "./middleware";

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
