import { GraphQLObjectType, GraphQLString } from "graphql";
import { Coordinate } from "./coordinate";

export const Item = new GraphQLObjectType({
    name: "Item",
    fields: {
        id: {
            type: GraphQLString,
            resolve: (item) => item.id
        },
        name: {
            type: GraphQLString,
            resolve: (item) => item.name
        },
        authority: {
            type: GraphQLString,
            resolve: (item) => item.authority
        },
        expiration: {
            type: GraphQLString,
            resolve: (item) => item.expiration,
        },
        position: {
            type: Coordinate,
            resolve: (item) => item.position
        }
    },
});