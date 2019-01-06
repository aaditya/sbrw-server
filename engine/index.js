const express = require('express');
const router = express.Router();

router.get('/GetServerInformation', require('../modules/getServerInfo'));
router.get('/User/createUser', require('../modules/user/createUser'));

module.exports = router;