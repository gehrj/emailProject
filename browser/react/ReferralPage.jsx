'use strict'

import React from 'react';

export default class ReferralPage extends React.Component {
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