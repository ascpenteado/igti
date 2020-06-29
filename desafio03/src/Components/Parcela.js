import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Parcela({ newMontante }) {
    console.log(newMontante);
    return (
        <React.Fragment>
            {newMontante.map(
                ({ parcela, totalParcelas, capital, juros, montante }) => {
                    return (
                        <Card
                            style={{ width: '12rem', margin: '1rem' }}
                            key={parcela}
                        >
                            <Card.Header>
                                Parcela {parcela}/{totalParcelas}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>R$ {montante}</Card.Title>
                                <Card.Text>
                                    Rendimento: R${' '}
                                    {(montante - capital).toFixed(2)}
                                </Card.Text>
                                <Card.Text>
                                    Valorização:{' '}
                                    {((montante / capital - 1) * 100).toFixed(
                                        2
                                    )}
                                    %
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                }
            )}
        </React.Fragment>
    );
}
