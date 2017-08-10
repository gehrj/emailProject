'use strict'

const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
const models = require('../models');
const Referral = models.Referral;
const User = models.User;
module.exports = router;

// this is main route and really only one needed for project, it will allow us to add referrals to database on submit later on.
// First we make a post request which basically means add to database, then we create the referral into the database, we have to use .then because create gives us a promise.
// Then send a status and the referral to show that it has been created.
router.post('/', (req, res, next) => {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'fakeautomechemail@gmail.com',
            pass: 'fakePassword' 
        }
    });
    User.findById(req.body.userId)
    .then(user => {
        if (!user) {
            const err = Error('user does not exist!');
            err.status = 404;
            throw err;
        }
        let text = `Hey, ${req.body.firstName} \n\nWelcome to AutoMech where we make taking care of your car easy! You were referred to us by ${user.firstName} ${user.lastName}! \nWe hope to see you soon! \n\nAutoMech`

        let mailOptions = {
            from: 'fakeautomechemail@gmail.com',
            to: req.body.email,
            subject: 'Welcome to AutoMech!',
            text: text
        }
        transporter.sendMail(mailOptions, (error,info) => {
            if (error) console.log(error);
            else console.log("Message Sent: " + info.response)
        })
    })
    Referral.create(req.body)
        .then(referral => res.status(201).json(referral))
        .catch(next)
});

// this will allow us to retrieve referrals and throw an error if referral does not exist, this is just here for future, not needed for project.
router.get('/:referralId', (req, res, next) => {
    Referral.findById(req.body.id)
        .then(referral => {
            if (!referral) {
                const err = Error('referral not found!');
                err.status = 404;
                throw err;
            }
            res.json(referral);
        })
});

// same as the get, this is not needed for project, but it would allow for us to delete referrals once we want them out of database for any reason.
router.delete('/:referralId', (req, res, next) => {
    Referral.findById(req.body.id)
        .then(referral => {
            if (!referral) {
                const err = Error('referral not found!');
                err.status = 404;
                throw err;
            }
            referral.destroy()
                .then(() => res.status(204).end())
                .catch(next);
        })
});

