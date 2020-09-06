const express = require('express');

const router = express.Router();

router.route('/createPromoCode')
  .post(require('./createPromoCode'));

router.route('/usePromoCode')
  .post(require('./usePromoCode'));

module.exports = router;
