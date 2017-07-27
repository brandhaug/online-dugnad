const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skuSchema = new Schema({
    size: String,
    color: String,
    inventory: Number,
    active: Boolean,
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    statistics: [{
        date: {
            type: Date,
            default: Date.now()
        },
        paid: {
            type: Number,
            default: 0
        },
        singlePurchase: {
            type: Number,
            default: 0
        },
        subscriptionPaid: {
            type: Number,
            default: 0
        }
    }]
});

module.exports = mongoose.model('Sku', skuSchema);
