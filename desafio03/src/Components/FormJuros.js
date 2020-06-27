import React from 'react';
import Form from 'react-bootstrap/Form';

export default function FormJuros() {
    return (
        <div>
            <div>
                <h5>Calculadora:</h5>
                <Form>
                    <Form.Group controlId="valorInicial">
                        <Form.Label>Valor inicial:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insira o valor inicial"
                        />
                    </Form.Group>
                    <Form.Group controlId="valorJuros">
                        <Form.Label>Juros (por mês):</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insira o valor inicial"
                        />
                    </Form.Group>
                    <Form.Group controlId="valorMeses">
                        <Form.Label>Período (em meses):</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insira o valor inicial"
                        />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}
