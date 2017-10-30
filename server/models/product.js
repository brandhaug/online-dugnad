const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Product Schema
const productSchema = new Schema({
  attributes: [String],
  caption: String,
  description: String,
  images: [{
    url: String,
    alt: String
  }],
  name: String,
  skus: [{
    type: Schema.Types.ObjectId,
    ref: 'Sku'
  }],
  profit: Number,
  profit2: Number,
  price: Number,
  price2: Number,
  url: String,
  active: Boolean,
  vatPercent: Number,
  subGroup: Number,
  order: Number,
  statistics: [{
    date: {
      type: Date,
      default: Date.now
    },
    clicks: {
      type: Number,
      default: 0
    },
    addedToCart: {
      type: Number,
      default: 0
    },
    removedFromCart: {
      type: Number,
      default: 0
    },
    addedQuantity: {
      type: Number,
      default: 0
    },
    subtractedQuantity: {
      type: Number,
      default: 0
    }
  }]
});

module.exports = mongoose.model('Product', productSchema);
