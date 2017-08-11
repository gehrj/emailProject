const express = require('express');
const router = express.Router();
const user = require('./user');
const referral = require('./referral');

// basically making user and referral routes more modular here
router.use('/user', user);
router.use('/referral', referral);

module.exports = router;