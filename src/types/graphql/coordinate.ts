import { GraphQLFloat, GraphQLInputObjectType, GraphQLObjectType } from "graphql";

export const Coordinate = new GraphQLObjectType({
    name: "Coordinate",
    fields: {
        latitude: {
            type: GraphQLFloat,
            resolve: (coordinate) => coordinate.latitude,
        },
        longitude: {
            type: GraphQLFloat,
            resolve: (coordinate) => coordinate.latitude,
        },
    },
});

export const CoordinateInput = new GraphQLInputObjectType({
    name: "CoordinateInput",
    fields: {
        latitude: {
            type: GraphQLFloat,
        },
        longitude: {
            type: GraphQLFloat,
        },
    },
});