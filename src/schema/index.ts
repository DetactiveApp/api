import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { Validation } from "../types/graphql";
import { SignInMutation, SignUpMutation, UserMutation, UserQuery } from "./user";
import { ItemsMutation, PickUpItem } from "./item";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Queries",
    fields: {
      ping: {
        type: GraphQLString,
        resolve: () => "Pong!",
      },
      validation: {
        type: Validation,
        resolve: () => Validation,
      },
      user: UserQuery
    },
  }),
  mutation: new GraphQLObjectType({
    name: "Mutations",
    fields: {
      user: UserMutation,
      signUp: SignUpMutation,
      signIn: SignInMutation,
      items: ItemsMutation,
      pickUpItem: PickUpItem,
    },
  }),

});

