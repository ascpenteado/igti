import React, { Component } from 'react';

export default class InputSalario extends Component {
    render() {
        return (
            <div className="input-field col s12">
                <input type="number" id="salario" />
                <label className="active" htmlFor="salario">
                    Salário Bruto
                </label>
            </div>
        );
    }
}
