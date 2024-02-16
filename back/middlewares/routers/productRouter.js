const express = require("express");
const {auth} = require("../middlewares/auth");
const {
  getAllProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
  // reviews
  createProductReview,
  getAllReviews,
  deleteReview,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/new").post(auth, createProduct);
router
  .route("/:id")
  .get(getProduct)
  .delete(auth, deleteProduct)
  .put(auth, updateProduct);

router.route("/:id/review/new").post(auth, createProductReview)
router.route("/:id/review/").get(getAllReviews)
router.route("/:id/review/").delete(auth, deleteReview)

module.exports = router;
