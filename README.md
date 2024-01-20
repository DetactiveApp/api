# Detactive API

Game logic, user authentication and more.

## Installation

Make sure you have [Bun](https://bun.sh) installed globally. With `bun --version` you can check if bun is installed on your machine. Then clone the repository and install all dependencies with `bun i`. <br>
Make sure that you have set up the environment variables as in the [template](./.env.template).

## Run Locally

You can start the api by running `bun run dev`.

```bash
# http://localhost:3000
# http://localhost:3000/graphql
# http://localhost:3000/swagger
```

To access `/graphql` without authorization make sure to set the origin in the header to `localhost:3000` while running the api locally.

## Run Tests

To run tests, run the following command

```bash
bun test:unit
```

## Tech Stack

Core: [Elysia.js](https://elysiajs.com/), [Typescript](https://www.typescriptlang.org/) <br>
Code Quality: [Prettier](https://prettier.io/) <br>
Testing: [Bun Test](https://bun.sh/docs/cli/test)

## Misc.

### Pull Request

The title of the pull request should be semantic and in lower case.

Please use the Jira-Ticket number as scope.

Some examples:

feat(DT-123): some awesome new feature
style(DT-13): some fresh new styles

### Other

Do not push directly into release!!!
