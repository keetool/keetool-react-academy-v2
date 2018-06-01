import React from 'react';
import PropTypes from 'prop-types';
import {Divider, Icon, Layout} from "antd";
import styles from './styles.less';
import {Link} from "react-router-dom";
import {LOGO_HEADER} from "../../constants";
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class GlobalHeader extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const {isMobile, collapsed, onCollapse, fixed} = this.props;
        return (
            <Layout.Header className={cx({
                'header-fixed-top': fixed
            })}>
                <div className={styles.header}>
                    {isMobile && [
                        <Link to="/" className={styles.logo} key="logo">
                            <img src={LOGO_HEADER} alt="logo" width="32"/>
                        </Link>,
                        <Divider type="vertical" key="line"/>,
                    ]}
                    <Icon
                        className={styles.trigger}
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={() => onCollapse()}
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