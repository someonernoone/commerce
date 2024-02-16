const Order = require("../models/orderModel");
const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

const createOrder = expressAsyncHandler(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = new Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    user: req.user._id,
    paidAt: Date.now(),
  });

  res.status(201).json({
    success: true,
    order,
  });
});

const getSingleOrder = expressAsyncHandler(async (req, res, next) => {
  const order = await Order.findOne({
    _id: req.params.id,
    user: req.user._id,
  }).populate("user", "name email");

  if (!order) {
    return next(new ErrorHandler("order not found", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

const getAllOrders = expressAsyncHandler(async (req, res, next) => {
  const orders = await Order.find({ uder: req.user._id }).populate(
    "orderItems.product",
    "name price",
  );

  res.status(200).json({
    success: true,
    oreders,
  });
});

module.exports = {
  createOrder,
  getSingleOrder,
  getAllOrders,
};
