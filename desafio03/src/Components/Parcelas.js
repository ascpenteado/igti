import React from 'react';
import Parcela from './Parcela';
import { Row, Col, CardDeck } from 'react-bootstrap';

export default function Parcelas() {
    return (
        <div>
            <h5>Parcelas:</h5>
            <hr></hr>
            <Row>
                <Col className="d-flex justify-content-center">
                    <CardDeck>
                        <Parcela />
                    </CardDeck>
                </Col>
            </Row>
        </div>
    );
}
