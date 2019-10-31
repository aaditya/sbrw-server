const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = new schema({
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

module.exports = mongoose.model('Product', productSchema);
