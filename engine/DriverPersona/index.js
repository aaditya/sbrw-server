const express = require('express');
const router = express.Router();

router.get('/GetExpLevelPointsMap', auth, require('./explpm'));
// router.get('/GetPersonalInfo', auth, ...);
// router.post('/ReserveName', auth, ...);
// router.post('/UnreserveName', auth, ...);
// router.post('/CreatePersona', auth, ...);
// router.post('/DeletePersona', auth, ...);
// router.post('/GetPersonaBaseFromList', auth, ...);
// router.post('/UpdatePersonaPresence', auth, ...);
// router.post('/GetPersonaPresenceByName', auth, ...);
// router.post('/UpdateStatusMessage', auth, ...);

module.exports = router;