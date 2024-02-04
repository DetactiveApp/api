FROM oven/bun

WORKDIR /app

COPY . .

RUN bun install --production
RUN bunx prisma generate

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 8080