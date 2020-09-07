const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  id: Number,
  bundleItems: String,
  categoryId: String,
  categoryName: String,
  currency: String,
  description: String,
  durationMinute: Number,
  enabled: Number,
  hash: Number,
  icon: String,
  level: Number,
  longDescription: String,
  minLevel: Number,
  premium: Number,
  price: Number,
  priority: Number,
  productId: String,
  productTitle: String,
  productType: String,
  secondaryIcon: String,
  useCount: Number,
  visualStyle: String,
  webIcon: String,
  webLocation: String,
  isDropable: Number,
});

module.exports = model('Product', productSchema);
