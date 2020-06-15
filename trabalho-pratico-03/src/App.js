import React, { Component } from 'react';
import InputSalario from './components/InputSalario/InputSalario';
import BaseInss from './components/Inss/BaseInss/BaseInss';
import DescontoINSS from './components/Inss/DescontoInss/DescontoInss';
import BaseIRPF from './components/IRPF/BaseIRPF/BaseIRPF';
import DescontoIRPF from './components/IRPF/DescontoIRPF/DescontoIRPF';
import InputLiquido from './components/SalarioLiquido/InputLiquido';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h4>Calculadora salário líquido</h4>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <InputSalario />
                            </div>
                            <div className="row">
                                <BaseInss />
                                <DescontoINSS />
                                <BaseIRPF />
                                <DescontoIRPF />
                            </div>
                            <div className="row">
                                <InputLiquido />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
