const chai = require('chai');
const expect = require('chai').expect;
const models = require('../models');
const Referral = models.Referral;


// implemented one test, would implement more if had more time
describe('Referral Model', () => {
    beforeEach(() => {
         referral = Referral.build({
            firstName: 'Henry',
            lastName: 'Ford',
            email: 'ford@gmail.com'
        });
    });
    describe('firstName is correct', () => {
        it('referral.firstName should be Henry', () => {
            expect(referral.firstName).to.equal('Henry');
        });
    });
});