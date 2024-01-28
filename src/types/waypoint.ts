import { GraphQLObjectType, GraphQLString } from "graphql";
import { Coordinates } from "./coordinates";

export const Waypoint = new GraphQLObjectType({
    name: "Waypoint",
    fields: {
        uuid: {
            type: GraphQLString,
            resolve: (waypoint) => waypoint.uuid
        },
        placeType: {
            type: GraphQLString,
            resolve: (waypoint) => waypoint.placeType
        },
        coordinates: {
            type: Coordinates,
            resolve: (waypoint) => waypoint.coordinates
        }
    }
});