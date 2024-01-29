import {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from "graphql";
import jwt from "jsonwebtoken";
import { Game, User, Token, Story } from "./types";
import { dbClient } from ".";
import { Coordinates } from "./types/coordinates";


export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Queries",
        fields: {
            ping: {
                type: GraphQLString,
                resolve: () => "Pong!",
            },
            story: {
                type: Story,
                resolve: async (parent, args, context, info) => {
                    const story = await dbClient.story.findFirst({
                        where: { ...(args.uuid ? { uuid: args.uuid } : {}) },
                    });
                    return story;
                },
                args: {
                    uuid: {
                        type: GraphQLString,
                    },
                },
            },
            stories: {
                type: new GraphQLList(Story),
                resolve: async (parent, args, context, info) => {
                    const stories = await dbClient.story.findMany({
                        where: { ...(args.active ? { active: args.active } : {}) },
                    });
                    return stories;
                },
                args: {
                    active: {
                        type: GraphQLBoolean,
                    },
                },
            },
            user: {
                type: User,
                resolve: async (parent, args, context, info) => {
                    const user = await dbClient.user.findFirst({
                        where: {
                            ...(args.uuid
                                ? { uuid: args.uuid }
                                : { uuid: context.user.uuid }),
                        },
                    });
                    return user;
                },
                args: {
                    uuid: {
                        type: GraphQLString,
                    },
                },
            },
        },
    }),
    mutation: new GraphQLObjectType({
        name: "Mutations",
        fields: {
            user: {
                type: User,
                resolve: async (parent, args, context, info) => {
                    return await dbClient.user.update({
                        data: {
                            email: args.email,
                        },
                        where: { uuid: context.user.uuid },
                    });
                },
                args: {
                    email: {
                        type: GraphQLString,
                    },
                },
            },
            game: {
                type: Game,
                resolve: async (parent, args, context, info) => {
                    const game = await dbClient.game.findFirst({
                        where: {
                            ...(args.uuid ? { uuid: args.uuid } : {}),
                            ...(args.finishedAt ? { finishedAt: args.finishedAt } : {}),
                            ...(args.userUuid ? { userUuid: context.user.uuid } : {}),
                        },
                    });
                    const userCoordinates: Coordinates = { latitude: args.userCoordinates.latitude, longitude: args.userCoordinates.longitude };
                    return { game, userCoordinates };
                },
                args: {
                    uuid: {
                        type: GraphQLString,
                    },
                    finishedAt: {
                        type: GraphQLString,
                    },
                    userCoordinates: {
                        type: new GraphQLInputObjectType({
                            name: "UserCoordinates",
                            fields: {
                                latitude: {
                                    type: GraphQLFloat,
                                },
                                longitude: {
                                    type: GraphQLFloat,
                                }
                            }
                        }),
                    }
                },
            },
            signUp: {
                type: Token,
                resolve: async (parent, args, context, info) => {
                    const user = await dbClient.user.create({
                        data: {
                            email: args.email,
                            secret: await Bun.password.hash(args.password),
                            birthday: args.birthday,
                            username: args.username,
                        },
                        select: {
                            uuid: true,
                        },
                    });

                    if (!user) {
                        throw new Error("Wrong password.");
                    }

                    return jwt.sign({ user: user.uuid }, process.env.JWT_KEY!);
                },
                args: {
                    email: {
                        type: GraphQLString!,
                    },
                    password: {
                        type: GraphQLString!,
                    },
                    birthday: {
                        type: GraphQLString!,
                    },
                    username: {
                        type: GraphQLString!,
                    },
                },
            },
            signIn: {
                type: Token,
                resolve: async (parent, args, context, info) => {
                    const user = await dbClient.user.findFirst({
                        where: {
                            email: args.email,
                        },
                    });

                    if (!user) {
                        throw new Error("Not found.");
                    }

                    if (await Bun.password.verify(args.password, user.secret)) {
                        return jwt.sign({ user: user.uuid }, process.env.JWT_KEY!);
                    }

                    throw new Error("Wrong password.");
                },
                args: {
                    email: {
                        type: GraphQLString,
                    },
                    password: {
                        type: GraphQLString,
                    },
                },
            },
        },
    }),
});
