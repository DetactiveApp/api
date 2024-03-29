import { GraphQLFloat, GraphQLObjectType } from "graphql";

export const Coordinate = new GraphQLObjectType({
    name: "Coordinate",
    fields: {
        latitude: {
            type: GraphQLFloat,
            resolve: (coordinate) => coordinate.latitude,
        },
        longitude: {
            type: GraphQLFloat,
            resolve: (coordinate) => coordinate.longitude,
        },
    },
});