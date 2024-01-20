import { Elysia, t } from "elysia";
import { db_client } from "..";
import { jwtDetactive } from "./jwtDetactive";

export const signIn = new Elysia().use(jwtDetactive).post(
  "/signIn",
  async ({ body, jwt, params }) => {
    const user = await db_client.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new Error("Not found.");
    }

    if (await Bun.password.verify(body.password, user.secret)) {
      return { token: await jwt.sign({ params, sub: user.uuid }) };
    }

    throw new Error("Wrong password.");
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
