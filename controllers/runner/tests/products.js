const products = require(__base + 'models/products');

const productInfo = (req, res) => {
    products.find({}).exec((err, doc) => {
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

module.exports = productInfo;