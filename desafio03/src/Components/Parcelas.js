import React from 'react';
import Parcela from './Parcela';
import { Row } from 'react-bootstrap';

export default function Parcelas({ newMontante }) {
    return (
        <div>
            <h5>Parcelas:</h5>
            <hr></hr>
            <Row>
                <div className="row row-cols-12 row-cols-md-12">
                    <Parcela newMontante={newMontante} />
                </div>
            </Row>
        </div>
    );
}
