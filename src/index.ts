import { Elysia, t } from "elysia";
import { PrismaClient } from "@prisma/client";
import swagger from "@elysiajs/swagger";
import { guard } from "./guard";
import { signUp, jwtDetactive, signIn } from "./plugins";

export const db_client = new PrismaClient();
const api_version = require("../package.json").version;

new Elysia()
  .use(swagger())
  .use(jwtDetactive)
  .use(signUp)
  .use(signIn)
  .get("/", `Detactive API v${api_version}`)
  .get("/graphql", async ({ request, jwt }) => guard(request, jwt))
  .post("/graphql", async ({ request, jwt }) => guard(request, jwt))
  .listen(3000);
