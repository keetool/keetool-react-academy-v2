import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Layout} from "antd";
import styles from './styles.less';

class GlobalHeader extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <Layout.Header style={{padding: 0}}>
                <div className={styles.header}>
                    <Icon
                        className={styles.trigger}
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.onCollapse}
                    />
                </div>
            </Layout.Header>
        );
    }
}

GlobalHeader.propTypes = {
    onCollapse: PropTypes.func.isRequired,
    collapsed: PropTypes.bool.isRequired,
};

export default GlobalHeader;