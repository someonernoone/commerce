const express = require("express");
const {
  logoutUser,
  userInfo,
  registerUser,
  loginHandler,
} = require("../controllers/userController");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.route("/").get(auth, userInfo);
router.route("/register").post(registerUser);
router.route("/login").post(loginHandler);
router.route("/logout").get(auth, logoutUser);

module.exports = router;
