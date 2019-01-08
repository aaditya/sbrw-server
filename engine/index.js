const express = require('express');
const router = express.Router();

// Logger function, separate use for debugging.
// router.use((req, res, next) => {
//     console.log('----------------------------------------')
//     console.log('headers', req.headers);
//     console.log('body', req.body);
//     next();
// })

// Server Info
router.get('/GetServerInformation', require('../modules/core/getServerInfo'));

// Authentication Routes
router.get('/User/createUser', require('../modules/user/createUser'));
router.get('/User/authenticateUser', require('../modules/user/authUser'));
router.get('/User/SecureLogout' , require('../modules/user/logoutUser'));

// Session Route
router.post('/User/GetPermanentSession', require('../modules/user/permSess'));

// FriendList
router.get('/getfriendlistfromuserid', require('../modules/core/frndList'));

// User Settings
router.get('/getusersettings', require('../modules/core/userSettings'));

// Client
router.get('/logging/client', require('../modules/client/logging'));

// System Info
router.get('/systeminfo', require('../modules/core/systeminfo'));

// Chat Info
router.get('/Session/GetChatInfo', require('../modules/session/chat'));

// Car Classes
router.get('/carclasses', require('../modules/core/carClasses'));

// Driver Persona
router.get('/DriverPersona/GetExpLevelPointsMap', require('../modules/persona/explpm'));
router.get('/personas/:id/carslots', require('../modules/persona/carSlots'));
router.get('/personas/:id/defaultcar', require('../modules/persona/defaultCar'));

// Security APIs
router.get('/security/fraudConfig', require('../modules/security/fraudCfg'));

// Other APIs
router.get('/getrebroadcasters', require('../modules/core/reBroadcasters'));
router.get('/getregioninfo', require('../modules/core/regionInfo'));
router.get('/LoginAnnouncements', require('../modules/core/loginAnnouncements'));

// Catalog
router.get('/catalog/productsInCategory', require('../modules/catalog/productsInCategory'));

router.post('/Reporting/SendHardwareInfo', require('../modules/reporting/hardware'));
router.post('/Reporting/SendUserSettings', require('../modules/reporting/hardware'));



module.exports = router;