const { Router: er } = require('express');

const router = er();

router.get('/loadall', require('./loadAll'));

module.exports = router;
