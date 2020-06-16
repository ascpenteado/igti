import React, { Component } from 'react';

export default class InputFullSalary extends Component {
    render() {
        const { change } = this.props;
        return (
            <div className="input-field col s12">
                <input
                    placeholder="Salário Bruto"
                    id="fullSalary"
                    type="text"
                    className="validate"
                    onChange={change}
                />
                <label className="active" htmlFor="fullSalary">
                    Salário Bruto
                </label>
            </div>
        );
    }
}
