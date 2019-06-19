const express = require('express');
const router = express.Router();

router.get('/productsInCategory', require('./productsInCategory'));

// router.get('/categories', require('./productsInCategory'));

module.exports = router;