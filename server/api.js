const express = require('express');
const router = express.Router();
const path = require('path');
const jwt = require('express-jwt');
const auth = jwt({secret: process.env.JWT_SECRET, userProperty: 'payload'});

const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');

// Products
router.get('/products/active', productRoute.getActiveProducts);
router.get('/products/:productId', productRoute.getProduct);


router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  next();
});

module.exports = router;
