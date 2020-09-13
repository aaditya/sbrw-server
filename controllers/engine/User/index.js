const express = require('express');

const router = express.Router();

const auth = require('./tokenVerify');

router.post('/GetPermanentSession', auth, require('./permSess'));

router.post('/SecureLoginPersona', (req, res) => res.send(''));

router.post('/SecureLogoutPersona', (req, res) => res.send(''));

router.get('/createUser', require('./createUser'));

router.get('/authenticateUser', require('./authUser'));

router.post('/SecureLogout', require('./logoutUser'));

module.exports = router;
