import { Elysia, t } from "elysia";
import { db_client } from "..";
import { jwtDetactive } from "./jwtDetactive";

export const signIn = new Elysia().use(jwtDetactive).post(
  "/signUp",
  async ({ body, jwt, params }) => {
    {
      const uuid = (await db_client.user.findFirst({
        where: {
          email: body.email,
          secret: await Bun.password.hash(body.password),
        },
      }))!.uuid;

      return { token: await jwt.sign({ params, sub: uuid }) };
    }
  },
  {
    body: t.Object({
      email: t.String(),
      password: t.String(),
    }),
    response: t.Object({
      token: t.String(),
    }),
  },
);
