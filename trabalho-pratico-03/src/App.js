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
            inssPercent: '',
            irpfPercent: '',
            netPercent: '',
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

        let inssPercent = this.findPercent(discountINSS, baseINSS);
        let irpfPercent = this.findPercent(discountIRPF, baseINSS);
        let netPercent = this.findPercent(netSalary, baseINSS);

        this.setState({
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
            inssPercent,
            irpfPercent,
            netPercent,
        });
    };

    convertToBRL(num) {
        let money = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(num);
        return money;
    }

    findPercent(num, base) {
        return ` (${((num / base) * 100).toFixed(2)}%)`;
    }

    render() {
        const {
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
            inssPercent,
            irpfPercent,
            netPercent,
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
                                percent={inssPercent}
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
                                percent={irpfPercent}
                            />
                        </div>
                        <div className="row">
                            <ReadOnly
                                description="Salário Líquido"
                                id="salarioLiquido"
                                val={this.convertToBRL(netSalary)}
                                percent={netPercent}
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
