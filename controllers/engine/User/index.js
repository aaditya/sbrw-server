const express = require('express');
const router = express.Router();

const auth = require('./tokenVerify');

router.post('/GetPermanentSession', auth, require('./permSess'));
// router.get('/SecureLoginPersona')
// router.get('/SecureLogoutPersona')
router.get('/createUser', require('./createUser'));
router.get('/authenticateUser', require('./authUser'));
router.post('/SecureLogout', require('./logoutUser'));

module.exports = router;