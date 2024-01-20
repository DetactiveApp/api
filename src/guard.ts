import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

export const guard = async (request: Request, jwt: any): Promise<Response> => {
  const token = request.headers.get("Authorization");

  const profile = await jwt.verify(token);
  if (!profile) {
    return new Response("Unauthorized.", { status: 401 });
  }

  return createYoga({
    cors: false,
    schema: schema,
    context: {},
  }).fetch(request);
};
