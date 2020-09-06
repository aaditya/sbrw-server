const { Router: er } = require('express');

const router = er();

router.get('/getProducts', require('./products'));

router.get('/getBaskets', require('./baskets'));

router.get('/getVinyls', require('./vinyls'));

router.get('/chatRooms', require('./chatRooms'));

module.exports = router;
