import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormJuros from './Components/FormJuros';
import Header from './Components/Header';
import Parcelas from './Components/Parcelas';

export default function App() {
    // Definir estado do montante
    const [capital, setCapital] = useState('');

    // Definir estado dos juros
    const [juros, setJuros] = useState('');

    // Definir estado das parcelas
    const [parcelas, setParcelas] = useState('');

    // Definir estado das parcelas
    const [montante, setMontante] = useState([
        {
            parcela: 0,
            totalParcelas: 0,
            capital: 0,
            juros: 0,
            montante: 0,
        },
    ]);

    const handleFormJuros = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        switch (id) {
            case 'valorInicial':
                setCapital(value);
                break;

            case 'valorJuros':
                setJuros(value);
                break;

            case 'valorMeses':
                setParcelas(value);
                break;

            default:
                break;
        }
    }; // HandleFormJuros

    function getMontante(C, i, t) {
        let novoMontante = [];
        for (let k = 1; k <= parcelas; k++) {
            let helperMontante = C * (1 + i / 100) ** k;
            novoMontante.push({
                capital: C,
                juros: i,
                totalParcelas: parcelas,
                parcela: k,
                montante: helperMontante.toFixed(2),
            });
        }
        return novoMontante;
    }

    useEffect(() => {
        setMontante(getMontante(capital, juros, parcelas));
    }, [capital, juros, parcelas]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Header title="React - Juros Compostos" />
                    </Col>
                </Row>
                <Row>
                    <Col lg="2">
                        <FormJuros onCalculate={handleFormJuros} />
                    </Col>
                    <Col lg="10">
                        <Parcelas newMontante={montante} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
