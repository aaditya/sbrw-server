const express = require('express');
const router = express.Router();

// Miscellaneous functions.
const auth = require('./user/tokenVerify');
const logger = require('./misc/logger');

// Server Info
router.get('/GetServerInformation', require('./core/getServerInfo'));

// Authentication Routes
router.get('/User/createUser', require('./user/createUser'));
router.get('/User/authenticateUser', require('./user/authUser'));
router.get('/User/SecureLogout' , logger, require('./user/logoutUser'));

// Session Route
router.post('/User/GetPermanentSession', auth, require('./user/permSess'));

// FriendList
router.get('/getfriendlistfromuserid', require('./core/frndList'));

// User Settings
router.get('/getusersettings', require('./core/userSettings'));

// Client
router.get('/logging/client', require('./client/logging'));

// System Info
router.get('/systeminfo', require('./core/systeminfo'));

// Chat Info
router.get('/Session/GetChatInfo', require('./session/chat'));

// Car Classes
router.get('/carclasses', require('./core/carClasses'));

// Driver Persona
router.get('/DriverPersona/GetExpLevelPointsMap', auth, require('./persona/explpm'));
// router.get('/DriverPersona/GetPersonalInfo', auth, ...);
// router.post('/DriverPersona/ReserveName', auth, ...);
// router.post('/DriverPersona/UnreserveName', auth, ...);
// router.post('/DriverPersona/CreatePersona', auth, ...);
// router.post('/DriverPersona/DeletePersona', auth, ...);
// router.post('/DriverPersona/GetPersonaBaseFromList', auth, ...);
// router.post('/DriverPersona/UpdatePersonaPresence', auth, ...);
// router.post('/DriverPersona/GetPersonaPresenceByName', auth, ...);
// router.post('/DriverPersona/UpdateStatusMessage', auth, ...);


// Personas
router.get('/personas/:id/carslots', require('./persona/carSlots'));
router.get('/personas/:id/defaultcar', require('./persona/defaultCar'));

// Security APIs
router.get('/security/fraudConfig', require('./security/fraudCfg'));

// Other APIs
router.get('/getrebroadcasters', require('./core/reBroadcasters'));
router.get('/getregioninfo', require('./core/regionInfo'));
router.get('/LoginAnnouncements', require('./core/loginAnnouncements'));

// Catalog
router.get('/catalog/productsInCategory', require('./catalog/productsInCategory'));

router.post('/Reporting/SendHardwareInfo', require('./reporting/hardware'));
router.post('/Reporting/SendUserSettings', require('./reporting/hardware'));



module.exports = router;