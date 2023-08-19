const registerSchema = require("./registerSchema");
const loginSchema = require("./loginSchema");
const reviewSchema = require("./reviewSchema");
const reviewUpdateSchema = require("./reviewUpdateSchema");
const userSchema = require("./userSchema");
const userUpdatePasswordSchema = require("./userUpdatePasswordSchema");
const taskSchema = require("./taskSchema");

module.exports = {
  loginSchema,
  registerSchema,
  reviewSchema,
  reviewUpdateSchema,
  userSchema,
  userUpdatePasswordSchema,
  taskSchema,
};
