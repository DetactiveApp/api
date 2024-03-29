import { GraphQLObjectType, GraphQLString } from "graphql";
import Validations from "../../../configs/validations.json";

export const Validation = new GraphQLObjectType({
  name: "Validation",
  fields: {
    username: {
      type: GraphQLString,
      resolve: () => Validations.username,
    },
    email: {
      type: GraphQLString,
      resolve: () => Validations.email,
    },
    password: {
      type: GraphQLString,
      resolve: () => Validations.password,
    },
  },
});
