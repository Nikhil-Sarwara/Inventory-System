const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const graphqlServer = require("./config/graphql"); // Import the GraphQL server config
const productRoutes = require("./routes/productRoutes");

dotenv.config();
connectDB();

const app = express();

// Define routes
app.use("/api", productRoutes);

const startServer = async () => {
  // Wait for the Apollo Server to start
  await graphqlServer.start();

  // Apply GraphQL middleware to the Express app after server start
  graphqlServer.applyMiddleware({ app });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(
      `GraphQL endpoint at http://localhost:${PORT}${graphqlServer.graphqlPath}`
    );
  });
};

startServer(); // Call the async function to start the server
