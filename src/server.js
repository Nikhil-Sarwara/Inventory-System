import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import server from "./config/graphql.js"; // Import the GraphQL server config
import productRoutes from "./routes/productRoutes.js";
import { gitAutomation } from "../git_automation.js";

config();

const app = express();

// Define routes
app.use("/api", productRoutes);

const startServer = async () => {
  // ask the user if they want to run the git automation
  // await gitAutomation();

  // Connect to MongoDB
  await connectDB();

  // Wait for the Apollo Server to start
  await server.start();

  // Apply GraphQL middleware to the Express app after server start
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
    console.log(
      `GraphQL endpoint at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

startServer(); // Call the async function to start the server
