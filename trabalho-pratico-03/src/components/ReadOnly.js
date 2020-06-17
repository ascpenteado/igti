import React, { Component } from 'react';

export default class ReadOnly extends Component {
    componentDidUpdate() {
        console.log('updated');
    }

    render() {
        const { description, id, val, percent } = this.props;
        return (
            <div className="input-field col s3">
                <input
                    placeholder={description}
                    id={id}
                    className="validate"
                    value={val + ' ' + percent}
                    disabled
                />
                <label className="active" htmlFor={id}>
                    {description}
                </label>
            </div>
        );
    }
}
