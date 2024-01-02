const Router = require("express")
const {getAllProducts, createNewProduct} = require("../controllers/product.controllers.js")

const router = Router()

router.route("/products").get(getAllProducts).post(createNewProduct)
router.get("/product",(req, res) => {} )

module.exports = router