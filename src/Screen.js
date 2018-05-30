import React from 'react';
import {Button} from 'antd';
class Screen extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <Button>adsadsa</Button>
                <h1>Hello world 1</h1>
            </div>

        );
    }
}

Screen.propTypes = {};

export default Screen;