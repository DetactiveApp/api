import { createYoga } from 'npm:graphql-yoga@^5.1.1';

const yoga = createYoga({

    landingPage: false,
});

Deno.serve(yoga);