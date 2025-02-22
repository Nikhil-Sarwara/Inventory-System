const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../schema/typeDefs");
const productResolver = require("../resolvers/productResolver"); // Import resolver here

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: productResolver.Query,
    Mutation: productResolver.Mutation,
  },
});

module.exports = server;
