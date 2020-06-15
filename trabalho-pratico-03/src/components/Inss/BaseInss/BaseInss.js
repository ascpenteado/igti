import React, { Component } from 'react';

export default class BaseINSS extends Component {
    render() {
        return (
            <div className="input-field col s3">
                <input type="number" id="baseINSS" />
                <label className="active" htmlFor="baseINSS">
                    Base INSS
                </label>
            </div>
        );
    }
}
