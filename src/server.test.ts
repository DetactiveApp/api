import { assertEquals } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { handler } from "./server.ts";

Deno.test("GraphQL Connection", async () => {
    const server = Deno.serve({ port: 3000, handler })
    const response = await fetch("http://localhost:3000");
    console.log(response.status)
    assertEquals(response.ok, true);
    await response.body?.cancel();
    await server.shutdown()
})
