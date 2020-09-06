const { Router: er } = require('express');

const router = er();

router.get('/products', require('./products'));

router.get('/baskets', require('./baskets'));

router.get('/vinyls', require('./vinyl'));

router.get('/chat-rooms', require('./chatRooms'));

module.exports = router;
