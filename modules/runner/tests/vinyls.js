const vinyls = require(__base + 'models/vinyls');
const { logger } = require('../../../utils/logger');

const vinylsInfo = (req, res) => {
    vinyls.find({}).exec((err, doc) => {
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

module.exports = vinylsInfo;
