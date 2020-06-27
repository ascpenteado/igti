import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Parcela(props) {
    return (
        <div>
            <Card style={{ width: '12rem', marginBottom: '1rem' }}>
                <Card.Header>Parcela 01/12</Card.Header>
                <Card.Body>
                    <Card.Title>R$ 1005,00</Card.Title>
                    <Card.Text>
                        <p>Rendimento: R$ 5,00</p>
                        <p>Valor inicial: R$ 1000,00</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
