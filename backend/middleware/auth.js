// 

const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  // Extract token from cookies
  const { token } = req.cookies;

  if (!token) {
    // If token is missing, return error
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  try {
    // Verify token
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID decoded from token
    const user = await User.findById(decodedData.id);

    if (!user) {
      // If user not found, return error
      return next(new ErrorHander("User not found", 404));
    }

    // Attach user object to request
    req.user = user;
    console.log(user);

    // Proceed to next middleware
    next();
  } catch (error) {
    // If token is invalid, return error
    return next(new ErrorHander("Invalid token", 401));
  }
});