const Cart = require("../models/cart.model");
const ApiError = require("../utils/ApiError.js");

const cartProduct = async (req, res) => {
  const cart = await Cart.find({});

  return res.status(200).json({ message: "all products in cart", cart });
};

const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const addProduct = new Cart({
      userId, 
      productId,
    });

    await addProduct.save();

    return res.status(200).json({
      message: "Product added successfully",
      addProduct: {
        userId: addProduct.user ? addProduct.user._id : null,
        productId: addProduct.product ? addProduct.product._id : null,
      },
    });
  } catch (error) {
    console.log("error in adding product to cart: ", error)
    throw new ApiError(500, "something wrong while adding the product to cart");
  }
};

module.exports = { addToCart, cartProduct };
