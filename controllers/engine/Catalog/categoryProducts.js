const Products = require('../../../models/products.js');

const catalog = async (req, res, next) => {
  try {
    const { categoryName, clientProductType } = req.query;
    const products = await Products.find({ categoryName, productType: clientProductType });
    res.type('application/xml').render('catalog/products', { products });
  } catch (err) {
    next(err);
  }
};

module.exports = catalog;
