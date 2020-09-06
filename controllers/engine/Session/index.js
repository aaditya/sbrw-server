const express = require('express');

const router = express.Router();

router.get('/GetChatInfo', require('./chat'));

module.exports = router;
