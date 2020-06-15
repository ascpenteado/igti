import React, { Component } from 'react';

export default class InputLiquido extends Component {
    render() {
        return (
            <div className="input-field col s12">
                <input type="number" id="liquido" />
                <label className="active" htmlFor="liquido">
                    Salário Líquido
                </label>
            </div>
        );
    }
}
