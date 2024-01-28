import { GraphQLFloat, GraphQLObjectType } from 'graphql';

export const Coordinates = new GraphQLObjectType({
    name: "Coordinates",
    fields: {
        latitude: {
            type: GraphQLFloat,
            resolve: (coordinates) => coordinates.latitude
        },
        longitude: {
            type: GraphQLFloat,
            resolve: (coordinates) => coordinates.longitude
        }
    }
})