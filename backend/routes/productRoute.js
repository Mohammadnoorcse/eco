const express = require("express");
const {
createProduct,
getProductDetails,
getAllProducts
} = require('../controllers/productController');
const router = express.Router();

router
  .route("/admin/product/new")
  .post(createProduct);
router.route("/product/:id").get(getProductDetails);
router.route("/products").get(getAllProducts);


module.exports = router;