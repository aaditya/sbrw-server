const express = require('express');
const router = express.Router();

router.get('/productsInCategory', require('./categoryProducts'));

// router.get('/categories', require('./productsInCategory'));

module.exports = router;