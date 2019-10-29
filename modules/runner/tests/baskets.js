const baskets = require(__base + 'models/baskets');
const { logger } = require('../../../utils/logger');

const basketsInfo = (req, res) => {
    baskets.find({}).exec((err, doc) => {
        if (err) {
            logger.info(err);
        }
        else {
            res.json({
                count: doc.length
            });
        }
    });
}

module.exports = basketsInfo;
