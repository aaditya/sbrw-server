const Baskets = require('../../../models/baskets');

const basket = async (req, res) => {
  try {
    const productId = req.body.BasketTrans.Items[0].BasketItemTrans[0].ProductId[0];
    const { ownedCarTrans } = await Baskets.findOne({ productId });
    const renderData = { ownedCarTrans, wallet: { cash: 300000.0, boost: 0.0 } };
    // Implement Transaction Logic
    res.type('application/xml').render('personas/baskets.ejs', { data: renderData });
  } catch (err) {
    console.log(err);
    // next(err);
  }
};

module.exports = basket;
