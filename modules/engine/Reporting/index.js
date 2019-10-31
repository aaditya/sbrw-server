const express = require('express');

const router = express.Router();

router.post('/SendHardwareInfo', require('./hardware'));

router.post('/SendUserSettings', require('./settings'));

// router.get('/SendMultiplayerConnect', require());

// router.get('/SendClientPingTime', require());

module.exports = router;
