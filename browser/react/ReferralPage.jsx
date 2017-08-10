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
            userId: 0,
            userFirstName: '',
            userLastName: '',
            userEmail: '',
            firstNameDirty: false,
            lastNameDirty: false,
            emailDirty: false
        }
        this.handleFirstNameForm = this.handleFirstNameForm.bind(this);
        this.handleLastNameForm = this.handleLastNameForm.bind(this);
        this.handleEmailForm = this.handleEmailForm.bind(this);
        this.handleUserIdForm = this.handleUserIdForm.bind(this);
        this.onReferralSubmit = this.onReferralSubmit.bind(this);
        this.userFirstName = this.userFirstName.bind(this);
        this.userLastName = this.userLastName.bind(this);
        this.userEmail = this.userEmail.bind(this);
        this.onUserCreate = this.onUserCreate.bind(this);
    }
    handleFirstNameForm(e) {
        const firstName = e.target.value;
        this.setState({
            firstName,
            firstNameDirty: true
        });
    }
    handleLastNameForm(e) {
        const lastName = e.target.value;
        this.setState({
            lastName,
            lastNameDirty: true
        });
    }
    handleEmailForm(e) {
        const email = e.target.value;
        this.setState({
            email,
            emailDirty: true
        });
    }
    handleUserIdForm(e) {
        const userId = parseInt(e.target.value);
        this.setState({ userId });
    }
    userFirstName(e) {
        const userFirstName = e.target.value;
        this.setState({ userFirstName });
    }
    userLastName(e) {
        const userLastName = e.target.value;
        this.setState({ userLastName });
    }
    userEmail(e) {
        const userEmail = e.target.value;
        this.setState({ userEmail });
    }
    onReferralSubmit(e) {
        e.preventDefault();
        if (this.state.firstName.length &&
            this.state.lastName.length &&
            validateEmail(this.state.email)
        ) {
            // need make axios call here to add referral, also need to send email and make sure that forign key get add right
            axios.post('/api/referral', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                userId: this.state.userId
            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    onUserCreate(e) {
        e.preventDefault();
        if (this.state.userFirstName.length &&
            this.state.userLastName.length &&
            validateEmail(this.state.userEmail)
        ) {
            axios.post('/api/user', {
                firstName: this.state.userFirstName,
                lastName: this.state.userLastName,
                email: this.state.userEmail
            })
                .then(response => {
                    console.log(response)
                    this.setState({
                        userFirstName: '',
                        userLastName: '',
                        userEmail: ''
                    })
                })
                .catch(error => {
                    console.log(error)
                })
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
                            <label>User Id</label>
                            <input
                                className="form-control"
                                name="User Id"
                                data-type="userId"
                                onChange={this.handleUserIdForm}
                            />
                            <label>First Name</label>
                            <input
                                className="form-control"
                                name="First Name"
                                data-type="firstName"
                                onChange={this.handleFirstNameForm}
                            />
                            <label>Last Name</label>
                            <input
                                className="form-control"
                                name="Last Name"
                                data-type="lastName"
                                onChange={this.handleLastNameForm}
                            />
                            <label>Email</label>
                            <input
                                className="form-control"
                                name="Email"
                                data-type="email"
                                onChange={this.handleEmailForm}
                            />
                        </div>
                        <div className="form-group col-lg-12 col-md-12">
                            <button type="submit" className="btn btn-default" onClick={this.onReferralSubmit}>
                                Submit Referral
    	                    </button>
                        </div>
                    </fieldset>
                </form>
                <h2> This is just to create a fake user to simulate a signed in user </h2>
                <form className="form-horizontal">
                    <fieldset>
                        <div className="form-group col-lg-12 col-md-12">
                            <label>First Name</label>
                            <input
                                className="form-control"
                                name="First Name"
                                data-type="firstName"
                                onChange={this.userFirstName}
                            />
                            <label>Last Name</label>
                            <input
                                className="form-control"
                                name="Last Name"
                                data-type="lastName"
                                onChange={this.userLastName}
                            />
                            <label>Email</label>
                            <input
                                className="form-control"
                                name="Email"
                                data-type="email"
                                onChange={this.userEmail}
                            />
                        </div>
                        <div className="form-group col-lg-12 col-md-12">
                            <button type="submit" className="btn btn-default" onClick={this.onUserCreate}>
                                Create Fake User
    	                    </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

// this helper function uses regex to make sure user is entering valid email syntax
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
