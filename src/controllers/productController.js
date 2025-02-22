import Product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default { getAllProducts };
