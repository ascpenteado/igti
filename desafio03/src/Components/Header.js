import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header(props) {
    return (
        <div>
            <Jumbotron>
                <h1 className="text-center">{props.title}</h1>
            </Jumbotron>
        </div>
    );
}
