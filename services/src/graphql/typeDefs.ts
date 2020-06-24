import { gql } from "apollo-server";

const typeDefs = gql`
  type Chef {
    id: ID!
    name: String!
    restaurants: [Restaurant!]!
  }

  type Restaurant {
    id: ID!
    name: String!
    menu: [Menu!]!
  }

  type Menu {
    id: ID!
    name: String!
    price: Int!
  }

  type Query {
    chefs: [Chef!]!
    restaurants: [Restaurant!]!
    menu: [Menu!]!
  }
`;

export default typeDefs;
