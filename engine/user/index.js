const express = require('express');
const router = express.Router();

router.get('/GetPermanentSession', require('./permSess'));
router.get('/SecureLoginPersona')
router.get('/SecureLogoutPersona')
router.get('/createUser', require('./createUser'));
router.get('/authenticateUser', require('./authUser'));
router.get('/SecureLogout', require('./logoutUser'));

module.exports = router;