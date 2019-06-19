const products = require(__base + 'models/products');

const productInfo = (req, res) => {
    products.find({}).exec((err, doc) => {
        let count = doc.length;
        res.json({
            docCount: count
        });
    });
}

module.exports = productInfo;