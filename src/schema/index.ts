import { StoryMutation, StoryQuery, StoryTypes } from "./story"


export const typeDefs = /* GraphQL */`
     type Query
     ${StoryTypes}
`
export const resolvers = {
   Query: {
      ... StoryQuery
   }
}