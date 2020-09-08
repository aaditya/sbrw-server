const express = require('express');

const router = express.Router();

router.use('/test', require('./tests'));

module.exports = router;
