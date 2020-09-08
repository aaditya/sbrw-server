const { Schema, model } = require('mongoose');

const categoriesSchema = new Schema({
  idcategory: Number,
  catalogVersion: Number,
  categories: String,
  displayName: String,
  filterType: String,
  icon: String,
  id: String,
  longDescription: String,
  name: String,
  priority: Number,
  shortDescription: String,
  showInNavigationPane: Number,
  showPromoPage: Number,
  webIcon: String,
});

module.exports = model('Categories', categoriesSchema);
