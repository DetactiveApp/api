import { PrismaClient } from "@prisma/client";
import { StoryResolver } from "./story";

const db = new PrismaClient();

export const resolvers = {
    Query: {
        story: StoryResolver,
    }

};

