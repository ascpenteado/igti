import React, { Component } from 'react';

export default class DescontoInss extends Component {
    render() {
        return (
            <div className="input-field col s3">
                <input type="number" id="descontoInss" />
                <label className="active" htmlFor="descontoInss">
                    Desconto INSS
                </label>
            </div>
        );
    }
}
