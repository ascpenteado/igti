import React from 'react';

export default class ProgressBarSalary extends React.Component {
    render() {
        const { value, color = 'black' } = this.props;

        return (
            <div
                style={{
                    marginTop: '40px',
                    width: value + '%',
                    height: '20px',
                    backgroundColor: color,
                }}
            />
        );
    }
}
