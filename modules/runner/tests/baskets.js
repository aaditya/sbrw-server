const baskets = require('../../../models/baskets');

const basketsInfo = (req, res) => {
  baskets.find({}).exec((err, doc) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        count: doc.length,
      });
    }
  });
};

module.exports = basketsInfo;
