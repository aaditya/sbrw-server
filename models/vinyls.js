const mongoose = require('mongoose');

const vinylSchema = mongoose.Schema({
    "id": Number,
    "bundleItems": String,
    "categoryId": String,
    "categoryName": Number,
    "currency": String,
    "description": String,
    "durationMinute": Number,
    "enabled": Number,
    "hash": Number,
    "icon": Number,
    "level": Number,
    "longDescription": String,
    "minLevel": Number,
    "premium": Number,
    "price": Number,
    "priority": Number,
    "productId": String,
    "productTitle": String,
    "productType": String,
    "secondaryIcon": Number,
    "useCount": Number,
    "visualStyle": String,
    "webIcon": Number,
    "webLocation": String,
    "parentCategoryId": Number
});

module.exports = mongoose.model('Vinyls', vinylSchema);