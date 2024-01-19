const Router = require("express");
const {
  getAllProducts,
  createNewProduct,
  deleteProducts,
} = require("../controllers/product.controllers.js");
const upload = require("../middlewares/multer.middlewares.js");

const router = Router();

router.route("/products").get(getAllProducts);
router.route("/products").post(
  upload.fields([
    {
      name: "productImage",
      maxCount: 1,
    },
  ]),
  createNewProduct
);
router.route("/products/:productId").delete(deleteProducts);
// router.get("/product",(req, res) => {} )

module.exports = router;
