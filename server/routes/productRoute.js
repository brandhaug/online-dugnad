const Product = require('../models/product');
const Sku = require('../models/sku');
const routeFunctions = require('./routeFunctions');

module.exports.getActiveProducts = function (req, res) {
  Product.find({'active': true}).populate('skus').sort('order').exec(function (err, products) {
    if (err) {
      return routeFunctions.handleError(res, err.message, 'Innhenting av produkter mislykket');
    }
    res.status(200).json({products: products});
  });
};

module.exports.getProduct = function (req, res) {
  Product.findById(req.params.productId).populate('skus').exec(function (err, product) {
    if (err) {
      return routeFunctions.handleError(res, err.message, 'Innhenting av produkt mislykket');
    }
    res.status(200).json(product);
  });
};
