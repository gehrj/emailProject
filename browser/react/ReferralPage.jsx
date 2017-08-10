'use strict'

import React from 'react';
import axios from 'axios';

export default class ReferralPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            firstNameDirty: false,
            lastNameDirty: false,
            emailDirty: false
        }
        this.handleFirstNameForm = this.handleFirstNameForm.bind(this);
        this.handleLastNameForm = this.handleLastNameForm.bind(this);
        this.handleEmailForm = this.handleEmailForm.bind(this);
        this.onReferralSubmit = this.onReferralSubmit.bind(this);
    }
    handleFirstNameForm(e) {
        const firstName = e.target.value
        this.setState({
            firstName,
            firstNameDirty: true
        })
    }
    handleLastNameForm(e) {
        const lastName = e.target.value
        this.setState({
            lastName,
            lastNameDirty: true
        })
    }
    handleEmailForm(e) {
        const email = e.target.value
        this.setState({
            email,
            emailDirty: true
        })
    }
    onReferralSubmit(e) {
        if (this.state.firstName.length &&
            this.state.lastName.length &&
            validateEmail(this.state.email)
        ) {
            // need make axios call here to add referral, also need to send email and make sure that forign key get add right
        }
    }
    render() {
        return (
            <div className="Referral page container">
                <h2>Like your service? Refer us to your friends!</h2>
                <h2>Leave their information below and we will handle the rest</h2>
                <form className="form-horizontal">
                    <fieldset>
                        <div className="form-group col-lg-12 col-md-12">
                            <label>First Name</label>
                            <input
                                className="form-control"
                                name="First Name"
                                data-type="firstName"
                            />
                            <label>Last Name</label>
                            <input
                                className="form-control"
                                name="Last Name"
                                data-type="lastName"
                            />
                            <label>Email</label>
                            <input
                                className="form-control"
                                name="Email"
                                data-type="email"
                            />
                        </div>
                        <div className="form-group col-lg-12 col-md-12">
                            <button type="submit" className="btn btn-default">
                                Submit Referral
    	                    </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
   function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
