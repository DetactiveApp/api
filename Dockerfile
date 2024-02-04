FROM oven/bun

WORKDIR /app

COPY . .

RUN bun install --production

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 8080