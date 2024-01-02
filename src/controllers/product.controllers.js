const Product = require("../models/product.models.js");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server error",
    });
  }
};

const createNewProduct = async (req, res) => {
  try {
    const {
      productId,
      productName,
      price,
      description,
      stock
    } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      productId,
      productName,
      price,
      description,
      stock
    });

    // Save the product to the database
    await newProduct.save();

    res.status(200).json(newProduct)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = {
  getAllProducts,
  createNewProduct,
};
