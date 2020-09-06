const express = require('express');

const router = express.Router();

router.get('/client', require('./client'));

module.exports = router;
