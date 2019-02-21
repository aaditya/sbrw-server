const express = require('express');
const router = express.Router();

router.get('/GetExpLevelPointsMap', require('./explpm'));

// router.get('/GetPersonalInfo', require('./gtprsnlnfo'));

router.post('/ReserveName', require('./reserveName'));

// router.post('/UnreserveName', auth, ...);

router.post('/CreatePersona', require('./createPersona'));

router.post('/DeletePersona', require('./deletePersona'));

// router.post('/GetPersonaBaseFromList', auth, ...);

// router.post('/UpdatePersonaPresence', auth, ...);

// router.post('/GetPersonaPresenceByName', auth, ...);

// router.post('/UpdateStatusMessage', auth, ...);

module.exports = router;