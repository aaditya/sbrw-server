const express = require('express');
const router = express.Router();

router.get('/GetPermanentSession', require('./user/authUser'));
router.get('/SecureLoginPersona')
router.get('/SecureLogoutPersona')
router.get('/createUser');
router.get('/authenticateUser', require('./user/authUser'));
router.get('/SecureLogout' , require('./user/logoutUser'));

module.exports = router;