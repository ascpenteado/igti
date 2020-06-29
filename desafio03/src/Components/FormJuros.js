import React from 'react';
import Form from 'react-bootstrap/Form';

export default function FormJuros({ montante, juros, parcelas, onCalculate }) {
    return (
        <div>
            <div>
                <h5>Calculadora:</h5>
                <Form>
                    <Form.Group controlId="valorInicial">
                        <Form.Label>Valor inicial:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insira o capital inicial"
                            onChange={onCalculate}
                        />
                    </Form.Group>
                    <Form.Group controlId="valorJuros">
                        <Form.Label>Juros (por mês):</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insira os juros"
                            min="-12"
                            max="12"
                            step="0.1"
                            onChange={onCalculate}
                        />
                    </Form.Group>
                    <Form.Group controlId="valorMeses">
                        <Form.Label>Período (em meses):</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insira o período"
                            onChange={onCalculate}
                            min="1"
                            max="36"
                        />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}
