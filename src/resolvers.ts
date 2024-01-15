import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

export const resolvers = {
    Query: {
        user: () => db.user
    }
}

