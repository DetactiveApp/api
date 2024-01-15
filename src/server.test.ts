import { assertEquals } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { handler } from "./server.ts";

Deno.test("GraphQL Connection", async () => {
    const server = Deno.serve({ port: 3001, handler })
    const response = await fetch("http://localhost:3001");
    assertEquals(response.ok, true, `Response Status: ${response.status}: ${response.statusText}`);
    await response.body?.cancel();
    await server.shutdown()
})
