import { ApolloServer } from "apollo-server-express";
import typeDefs from "../schema/typeDefs.js";
import productResolver from "../resolvers/productResolver.js"; // Import resolver here

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: productResolver.Query,
    Mutation: productResolver.Mutation,
  },
});

export default server;
