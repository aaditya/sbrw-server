const express = require('express');

const router = express.Router();

router.get('/fraudConfig', require('./fraudCfg'));

// router.post('/generateWebToken', require('./fraudCfg'));

module.exports = router;
