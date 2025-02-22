require("dotenv").config();
const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const csvParser = require("csv-parser");
const fs = require("fs");
const handle_git = require("./handle_git");

const app = express();
const PORT = process.env.PORT || 5000;

// Create .gitignore file if it does not already exist in the current directory or parent directory
handle_git.createGitignoreIfNotExists();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Mongoose Schema
const ItemSchema = new mongoose.Schema({
  name: String,
  purchaseDate: Date,
});

const Item = mongoose.model("Item", ItemSchema);

// Define GraphQL Schema
const schema = buildSchema(`
  type Item {
    id: ID!
    name: String!
    purchaseDate: String!
  }
  type Query {
    getItems: [Item]
  }
  type Mutation {
    addItem(name: String!, purchaseDate: String!): Item
  }
`);

const root = {
  getItems: async () => await Item.find(),
  addItem: async ({ name, purchaseDate }) => {
    const item = new Item({ name, purchaseDate });
    await item.save();
    return item;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enables GraphiQL interface
  })
);

// Multer setup for CSV file uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".csv");
  },
});
const upload = multer({ storage });

// CSV Upload Route
app.post("/upload", upload.single("file"), async (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      await Item.insertMany(
        results.map((row) => ({
          name: row["item name"],
          purchaseDate: new Date(row["purchase date"]),
        }))
      );
      fs.unlinkSync(req.file.path); // Clean up uploaded file
      res.json({ message: "CSV uploaded and processed successfully" });
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
