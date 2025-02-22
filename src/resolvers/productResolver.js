import Product from "../models/Product.js";

const productResolver = {
  Query: {
    products: async () => {
      return await Product.find();
    },
    product: async (_, { id }) => {
      return await Product.findById(id);
    },
  },
  Mutation: {
    createProduct: async (_, { name, price, quantity }) => {
      const newProduct = new Product({ name, price, quantity });
      await newProduct.save();
      return newProduct;
    },
    updateProduct: async (_, { id, name, price, quantity }) => {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, price, quantity },
        { new: true }
      );
      return updatedProduct;
    },
    deleteProduct: async (_, { id }) => {
      const deletedProduct = await Product.findByIdAndDelete(id);
      return deletedProduct;
    },
  },
};

export default productResolver;
