const Baskets = require('../../../models/baskets');

const flatten = require('../Miscellaneous/tree');

const basket = async (req, res, next) => {
  try {
    const body = flatten(req.body).BasketTrans.Items.BasketItemTrans;
    const baskets = await Baskets.find({ productId: body.ProductId });
    console.log(baskets);
    res.send('');
  } catch (err) {
    next(err);
  }
};

module.exports = basket;
