import React, { Component } from 'react';

export default class BaseIRPF extends Component {
    render() {
        return (
            <div className="input-field col s3">
                <input type="number" id="baseIRPF" />
                <label className="active" htmlFor="baseIRPF">
                    Base IRPF
                </label>
            </div>
        );
    }
}
