const Router = require("express")
const getAllProducts = require("../controllers/product.controllers.js")

const router = Router()

router.route("/products").get(getAllProducts)

module.exports = router