const Products = require('../../../models/products');

const data = require('../../../datasets/soapbox_table_product.json');

const addProducts = async (req, res) => {
  try {
    await Products.insertMany(data);
    res.send('DONE');
  } catch (err) {
    console.log(err);
  }
};

module.exports = addProducts;
