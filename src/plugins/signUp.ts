import { Elysia, t } from "elysia";
import { db_client } from "..";
import { jwtDetactive } from "./jwtDetactive";

export const signUp = new Elysia().use(jwtDetactive).post(
  "/signUp",
  async ({ body, jwt, params }) => {
    {
      const uuid = (
        await db_client.user.create({
          data: {
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            secret: await Bun.password.hash(body.password),
          },
          select: {
            uuid: true,
          },
        })
      ).uuid;

      return { token: await jwt.sign({ params, sub: uuid }) };
    }
  },
  {
    body: t.Object({
      email: t.String(),
      password: t.String(),
      firstName: t.String(),
      lastName: t.String(),
    }),
    response: t.Object({
      token: t.String(),
    }),
  },
);
