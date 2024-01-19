const Product = require("../models/product.model.js");
const uploadOnCloudinary = require("../utils/cloudinary.js");

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
    const { productName, price, description, stock } = req.body;

    //upload productImage on cloudinary

    // "?." used for if the field is empty or null then it will not show and error it shows undefined
    
    // const productImageLocalPath = await req.files?.productImage[0]?.path;
    // const productImage = await uploadOnCloudinary(productImageLocalPath);

    // Create a new product instance
    const newProduct = new Product({
      productName,
      price,
      description,
      productImage: productImage.url || "",
      stock,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(200).json({
      message: "New product created successfully",
      newProduct: {
        _id: newProduct.id,
        productName: newProduct.productName,
        price: newProduct.price,
        description: newProduct.description,
        productImage: newProduct.productImage,
        stock: newProduct.productImage,
      },
    });
  } catch (error) {
    console.log("Error while createing new product: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProducts = async (req, res) => {
  const productId = req.params.productId;

  try {
    const result = await Product.findOneAndDelete({ _id: productId });

    //if result is true that means the id is found then send the if statement message
    if (result) {
      res
        .status(200)
        .json({ message: `Product with id: ${productId} is deleted` });
    } else {
      res
        .status(404)
        .json({ message: `Product with id: ${productId} is not found` });
    }
  } catch (error) {
    console.log("Error deleting product: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  deleteProducts,
};
