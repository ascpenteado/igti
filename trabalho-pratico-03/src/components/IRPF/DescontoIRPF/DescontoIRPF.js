import React, { Component } from 'react';

export default class DescontoIRPF extends Component {
    render() {
        return (
            <div className="input-field col s3">
                <input type="number" id="descontoIRPF" />
                <label className="active" htmlFor="descontoIRPF">
                    Desconto IRPF
                </label>
            </div>
        );
    }
}
