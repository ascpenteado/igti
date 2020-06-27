import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormJuros from './Components/FormJuros';
import Header from './Components/Header';
import Parcelas from './Components/Parcelas';

export default class App extends Component {
    render() {
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
                            <FormJuros />
                        </Col>
                        <Col lg="10">
                            <Parcelas />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
