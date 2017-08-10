'use strict'

// would normally make each model in the database its own module but since this project is so small I decided to just put it all in the index.js file

const Sequelize = require('sequelize');
let db = new Sequelize('postgres://localhost:5432/AutoMech', {
    logging: false
});

// define user model here, I'm sure an actual user would have more data in their model but for purpose of project this seems fine

let User = db.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

// This is the referral model, it will store all of the referrals which we can then attach to a user so a user can have many referrals.

let Referral = db.define('referral', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

User.hasMany(Referral);

module.exports = {
    db,
    User,
    Referral
}