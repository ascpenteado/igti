import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary';
import ReadOnly from './components/ReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';
import { calculateSalaryFrom } from './helpers/salary';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            fullSalary: '',
            baseINSS: '',
            discountINSS: '',
            baseIRPF: '',
            discountIRPF: '',
            netSalary: '',
        };
    }

    handleInputFullSalary = (event) => {
        let salary = calculateSalaryFrom(event.target.value);
        let {
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
        } = salary;
        this.setState({
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
        });
    };

    convertToBRL(num) {
        let money = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(num);
        return money;
    }

    findPercent(num) {
        return ((num / this.state.baseINSS) * 100).toFixed(2);
    }

    render() {
        const {
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
        } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <h4>Calculadora salário líquido</h4>
                    <div className="row">
                        <div className="row">
                            <InputFullSalary
                                change={this.handleInputFullSalary}
                            />
                        </div>
                        <div className="row">
                            <ReadOnly
                                description="Base INSS"
                                id="baseINSS"
                                val={this.convertToBRL(baseINSS)}
                                percent={''}
                            />
                            <ReadOnly
                                description="Desconto INSS"
                                id="descontoINSS"
                                val={this.convertToBRL(discountINSS)}
                                percent={''}
                            />
                            <ReadOnly
                                description="Base IRPF"
                                id="baseIRPF"
                                val={this.convertToBRL(baseIRPF)}
                                percent={''}
                            />
                            <ReadOnly
                                description="Desconto IRPF"
                                id="descontoIRPF"
                                val={this.convertToBRL(discountIRPF)}
                                percent={''}
                            />
                        </div>
                        <div className="row">
                            <ReadOnly
                                description="Salário Líquido"
                                id="salarioLiquido"
                                val={this.convertToBRL(netSalary)}
                                percent={this.findPercent(netSalary)}
                            />
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div>
                                    <ProgressBarSalary color="red" />
                                    <ProgressBarSalary color="green" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
