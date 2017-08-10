'use strict'

const express = require('express');
const router = express.Router();
const models = require('../models');
const User = models.User;
module.exports = router;

// realize it would have made more sense to name the model Users but my mind was thinking in terms of project there will be just one user...
// this route will allow us to fetch a specific user by id which will be needed to attach a referral to specific user.
// this could also be used for other things in application as well.
// also has built in error checking that will give us an error if the user does not exist.
router.get('/:userId', (req, res, next) => {
    User.findById(req.body.id)
    .then(user => {
        if (!user) {
            const err = Error('User not found!');
            err.status = 404;
            throw err;
        }
        res.json(user);
    })
});