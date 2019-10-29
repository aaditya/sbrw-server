const products = require(__base + 'models/products');
const { logger } = require('../../../utils/logger');

const productInfo = (req, res) => {
    products.find({}).exec((err, doc) => {
        if (err) {
            logger.info(err);
        }
        else {
            res.json({
                count: doc.length
            });
        }
    });
};

module.exports = productInfo;
