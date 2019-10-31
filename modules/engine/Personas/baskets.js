const baskets = require('../../../models/baskets');
const flatten = require('../Miscellaneous/tree');

const basket = (req, res) => {
  const body = flatten(req.body).BasketTrans.Items.BasketItemTrans;
  baskets.find({ productId: body.ProductId }, (err, doc) => {
    if (err) {
      res.status(500).send('');
    } else {
      console.log(doc);
    }
  });
  res.send('');
};

module.exports = basket;
