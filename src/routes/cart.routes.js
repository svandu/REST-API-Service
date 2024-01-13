const { Router } = require("express");
const { addToCart, cartProduct } = require("../controllers/cart.controllers");

const router = Router()

router.route("/addtocart").post(addToCart)
router.route("/allcartproducts").get(cartProduct)

module.exports = router