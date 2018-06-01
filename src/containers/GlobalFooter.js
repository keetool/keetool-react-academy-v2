import React from 'react';
// import PropTypes from 'prop-types';
import {Layout} from "antd";

class GlobalFooter extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
    }

    render() {
        return (
            <Layout.Footer>Footer</Layout.Footer>
        );
    }
}

GlobalFooter.propTypes = {};

export default GlobalFooter;