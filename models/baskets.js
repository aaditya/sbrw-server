const { Schema, model } = require('mongoose');

const basketSchema = new Schema({
  ownedCarTrans: String,
  productId: String,
});

module.exports = model('Basket', basketSchema);
