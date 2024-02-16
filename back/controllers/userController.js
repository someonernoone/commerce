const User = require("../models/userModel");
const sendToken = require("../utils/sendToken");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const ErrorHandler = require("../utils/errorHandler");

const loginHandler = expressAsyncHandler(async (req, res, next) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please fill all required fields", 400));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("Invalid eamil and password", 400));
  }
  const comparePassword = await user.comparePassword(password);

  if (!comparePassword) {
    return next(new ErrorHandler("Invalid email and password", 400));
  }

  sendToken(res, user, 200);
});

const registerUser = expressAsyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
  }

  const user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: "avatar", url: "www.goggle.com" },
  });

  if (!user) {
    return next(new ErrorHandler("Internal Error", 500));
  }

  sendToken(res, user, 201);
});

const userInfo = expressAsyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  sendToken(res, user, 200);
});

const logoutUser = expressAsyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }

  res
    .status(200)
    .cookies("token", null, {
      expireIn: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logout successfully",
    });
});

const updateUser = expressAsyncHandler(async (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return next(new ErrorHandler("please fill all required fields"));
  }

  const data = {
    name,
    email,
  };

  const user = await User.findByIdAndUpdate(req.user._id, data);

  res.status(200).json({
    success: true,
    user,
  });
});

const updatePassword = expressAsyncHandler(async (req, res, next) => {
  const { password, oldPassword, confirmPassword } = req.body;

  if (!passsword || !password || !confirmPassword) {
    return next(new ErrorHandler("Please fill all required fields", 400));
  }

  if (password !== confirmPasword) {
    return next(new ErrorHandler("Passwords does not match", 400));
  }

  if (req.body.oldPassword === req.body.password) {
    return next(
      new ErrorHandler("old password and new password canonot be same", 400),
    );
  }

  const user = await User.findById(req.user._id);

  const comparePassword = await user.comparePasword(oldPasword);

  if (!comparePassword) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  user.password = password;

  await user.save();

  res.status(200).json({
    success: true,
    user,
    message: "Password updated successfully",
  });
});

const getAllUsers = expressAsyncHandler(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

const getUser = expressAsyncHandler(async (req, res, next) => {
  if (!req.params.id) {
    return next(new ErrorHandler("Please provide user id", 400));
  }

  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }

  res.status(200).json({
    success: true,
    user,
  });
});

const adminUpdateUser = expressAsyncHandler(async (req, res, next) => {
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return next(new ErrorHandler("Please fill all required fields", 400));
  }

  if (!req.params.id) {
    return next(new ErrorHandler("Please provide user id", 400));
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name,
      email,
      role,
    },
    { new: true, runValidators: true },
  );

  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }

  res.status(200).json({
    success: true,
    user,
  });
});

const deleteUser = expressAsyncHandler(async (req, res, next) => {
  if (!req.params.id) {
    return next(new ErrorHandler("Please provide user id", 400));
  }

  const user = await User.findByIdandDelete(req.params.id);

  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "user deleted successfully",
  });
});

module.exports = {
  //user
  logoutUser,
  registerUser,
  userInfo,
  loginHandler,
  updatePassword,
  updateUser,
  // admin
  getAllUsers,
  getUser,
  adminUpdateUser,
  deleteUser,
};
