const fs = require("fs");
const path = require("path");

const createFile = (filePath, content) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Created: ${filePath}`);
};

const projectStructure = () => {
  // /src/config/db.js
  createFile(
    "./src/config/db.js",
    `
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
  `
  );

  // /src/config/graphql.js
  createFile(
    "./src/config/graphql.js",
    `
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../schema/typeDefs');
const resolvers = require('../resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
  `
  );

  // /src/models/Product.js
  createFile(
    "./src/models/Product.js",
    `
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model('Product', productSchema);
  `
  );

  // /src/controllers/productController.js
  createFile(
    "./src/controllers/productController.js",
    `
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getAllProducts };
  `
  );

  // /src/resolvers/productResolver.js
  createFile(
    "./src/resolvers/productResolver.js",
    `
const Product = require('../models/Product');

const productResolver = {
  Query: {
    products: async () => await Product.find()
  }
};

module.exports = productResolver;
  `
  );

  // /src/routes/productRoutes.js
  createFile(
    "./src/routes/productRoutes.js",
    `
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);

module.exports = router;
  `
  );

  // /src/utils/logger.js
  createFile(
    "./src/utils/logger.js",
    `
const log = (message) => {
  console.log(\`[LOG] - \${message}\`);
};

module.exports = log;
  `
  );

  // /src/server.js
  createFile(
    "./src/server.js",
    `
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const graphqlServer = require('./config/graphql');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();

app.use('/api', productRoutes);

graphqlServer.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
  `
  );

  console.log("Project structure created successfully!");
};

projectStructure();
