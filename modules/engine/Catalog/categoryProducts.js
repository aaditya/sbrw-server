const products = require('../../../models/products.js');

const catalog = (req, res) => {
  const qp = req.query;
  products.find({ categoryName: qp.categoryName, productType: qp.clientProductType }, (err, doc) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.type('application/xml').render('catalog/products', { data: doc });
    }
  });
};

module.exports = catalog;
