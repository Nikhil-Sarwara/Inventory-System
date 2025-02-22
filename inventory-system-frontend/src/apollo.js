// src/apollo.js
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default apolloClient;
