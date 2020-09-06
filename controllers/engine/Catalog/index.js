const { Router: er } = require('express');

const router = er();

router.get('/productsInCategory', require('./categoryProducts'));

// router.get('/categories', require('./productsInCategory'));

module.exports = router;
