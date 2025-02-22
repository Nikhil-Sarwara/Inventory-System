import { gql } from "apollo-server-express";

// Define your GraphQL schema here
const typeDefs = gql`
  # Product type
  type Product {
    id: ID!
    name: String!
    price: Float!
    quantity: Int!
  }

  # Queries to fetch data
  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  # Mutations to modify data
  type Mutation {
    createProduct(name: String!, price: Float!, quantity: Int!): Product!
    updateProduct(id: ID!, name: String, price: Float, quantity: Int): Product!
    deleteProduct(id: ID!): Product!
  }
`;

export default typeDefs;
