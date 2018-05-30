import React from 'react';
import {DatePicker}from 'antd';

class Screen2 extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <DatePicker/>
                <h1>Hello world 2</h1>
            </div>

        );
    }
}

Screen2.propTypes = {};

export default Screen2;