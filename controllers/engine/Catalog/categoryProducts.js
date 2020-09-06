const Products = require('../../../models/products.js');

const catalog = async (req, res, next) => {
  try {
    const { categoryName, clientProductType } = req.query;
    const products = await Products.find({ categoryName, productType: clientProductType });
    return res.type('application/xml').render('catalog/products', { data: products });
  } catch (err) {
    return next(err);
  }
};

module.exports = catalog;
