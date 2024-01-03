const { ObjectId } = require('mongoose').Types;

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

const deleteProducts = async (req, res) => {

  const productId = req.params.productId;

  try {

    const productIdObject =  new ObjectId(productId);

    const result = await Product.findOneAndDelete({_id: productIdObject });

    //if result is true that means the id is found then send the if statement message
    if(result) {
      res.status(200).json({message: `Product with id: ${productId} is deleted`});
    } else {
      res.status(404).json({message: `Product with id: ${productId} is not found`});
    }

  } catch (error) {
    console.log('Error deleting product: ', error);
    res.status(500).json({message: "Internal server error"})
  }
}

module.exports = {
  getAllProducts,
  createNewProduct,
  deleteProducts
};
