const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary").v2;

// Create Product -- Admin
// exports.createProduct = catchAsyncErrors(async (req, res, next) => {
//     let images = [];
  
//     // if (typeof req.body.images === "string") {
//     //   images.push(req.body.images);
//     // } else {
//     //   images = req.body.images;
//     // }

//        // Check if req.body.images is an array of objects
//        if (Array.isArray(req.body.images)) {
//         // Assuming each object in req.body.images has a 'url' property
//         images = req.body.images.map(image => image.url);
//     } else if (typeof req.body.images === "string") {
//         // If it's a single image url, push it to the images array
//         images.push(req.body.images);
//     } else {
//         // Handle other cases accordingly
//         images = req.body.images;
//     }
  
//     const imagesLinks = [];
  
//     for (let i = 0; i < images.length; i++) {
//       const result = await cloudinary.v2.uploader.upload(images[i], {
//         folder: "products",
//       });
  
//       imagesLinks.push({
//         public_id: result.public_id,
//         url: result.secure_url,
//       });
//     }
  
//     req.body.images = imagesLinks;
//     // req.body.user = req.user._id;
  
//     const product = await Product.create(req.body);
  
//     res.status(201).json({
//       success: true,
//       product,
//     });
//   });
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  // Check if req.body.images is an array of objects
  if (Array.isArray(req.body.images)) {
      // Assuming each object in req.body.images has a 'url' property
      images = req.body.images.map(image => image.url);
  } else if (typeof req.body.images === "string") {
      // If it's a single image url, push it to the images array
      images.push(req.body.images);
  } else {
      // Handle other cases accordingly
      images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], {
          folder: "products",
      });
     

      imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
      });
  }
console.log(imagesLinks)
  req.body.images = imagesLinks;

  const product = await Product.create(req.body);

  res.status(201).json({
      success: true,
      product,
  });


});



  // Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});


// Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 16;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFeature.query.clone();

  let filteredProductsCount = products.length;

  apiFeature.pagination(resultPerPage);

  products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});