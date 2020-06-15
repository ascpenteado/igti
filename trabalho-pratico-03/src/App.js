import React, { Component } from 'react';
import InputSalario from './components/InputSalario/InputSalario';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h2>Calculadora salário líquido</h2>
                <InputSalario />
            </div>
        );
    }
}
