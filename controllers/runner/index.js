const express = require('express');

const router = express.Router();

router.use('/test', require('./tests'));

// router.use('/install', require('./install'));

module.exports = router;
