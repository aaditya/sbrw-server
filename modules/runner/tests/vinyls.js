const vinyls = require(__base + 'models/vinyls');

const vinylsInfo = (req, res) => {
    vinyls.find({}).exec((err, doc) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                count: doc.length
            });
        }
    });
}

module.exports = vinylsInfo;