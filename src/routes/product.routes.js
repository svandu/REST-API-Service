const Router = require("express")
const getAllPRoducts = require("../controllers/product.controllers.js")

const router = Router()

router.route("/products").get(getAllPRoducts)

module.exports = router