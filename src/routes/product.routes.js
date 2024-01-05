const Router = require("express");
const {
  getAllProducts,
  createNewProduct,
  deleteProducts,
} = require("../controllers/product.controllers.js");

const router = Router();

router.route("/products").get(getAllProducts).post(createNewProduct);
router.route("/products/:productId").delete(deleteProducts);
// router.get("/product",(req, res) => {} )

module.exports = router
