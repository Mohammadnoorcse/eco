const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require('cors')
const fileupload = require('express-fileupload'); 

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));
// app.use(express.limit(100000000));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(fileupload({useTempFiles: true}));
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
// const product = require("./routes/productRoute");
// const user = require("./routes/userRoute");
// const order = require("./routes/orderRoute");
// const payment = require("./routes/paymentRoute");

// app.use("/api/v1", product);
// app.use("/api/v1", user);
// app.use("/api/v1", order);
// app.use("/api/v1", payment);
const user = require("./routes/userRoute");
const product = require("./routes/productRoute");

app.use("/api/v1", user);
app.use("/api/v1", product);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;