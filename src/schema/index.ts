import {  GraphQLObjectType,  GraphQLSchema } from "graphql";
import { StoryGraphQlType } from "./types";

const schema = new GraphQLSchema({
   query: new GraphQLObjectType({
      name: "Query",
      fields: {
         story: {
            type: StoryGraphQlType
         }
      }
   })
})