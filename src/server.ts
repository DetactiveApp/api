import { GraphQLHTTP } from 'https://deno.land/x/gql@2.0.1/mod.ts'

const handler = (request: Request) => {
    if (new URL(request.url).pathname == '/graphql') {
        return GraphQLHTTP<Request>({
            graphiql: true
        })(request)
    }

    return new Response("Detactive API v0.0.0-alpha", { status: 200 })
}

Deno.serve({ port: 3000, handler })