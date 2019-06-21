const products = require(__base + 'models/products');

const productInfo = (req, res) => {
    products.find({}).exec((err, doc) => {
        res.json(doc)
    });
}

module.exports = productInfo;