const mongoose = require('mongoose');

const schema = mongoose.Schema;

const basketSchema = new schema({
  ownedCarTrans: String,
  productId: String,
});

module.exports = mongoose.model('Basket', basketSchema);
