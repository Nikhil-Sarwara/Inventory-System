import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
});

export default model("Product", productSchema);
