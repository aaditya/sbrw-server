const { Router: er } = require('express');

const router = er();

router.get('/GetModInfo', require('./modInfo'));

module.exports = router;
