const express = require('express');
const router = express.Router();

// router.post('/:pid/commerce', require('./commerce'));

router.post('/:pid/baskets', require('./baskets'));

router.get('/:pid/carslots', require('./carslots'));

// router.get('/inventory/objects', require('./inventoryObjects'));

// router.post('/:pid/cars', require('./cars').seller);

// router.get('/:pid/cars', require('./cars').list);

// router.put('/:pid/cars', require('./cars').buyer);

router.get('/:pid/defaultcar', require('./defaultCar'));

// router.put('/:pid/defaultcar/:cid', require('./defaultCar'));

module.exports = router;