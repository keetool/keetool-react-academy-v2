import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Layout, Menu} from "antd";
import styles from './index.less';
import {Link} from "react-router-dom";
// import classNames from 'classnames/bind';

// let cx = classNames.bind(styles);

class SiderMenu extends React.Component {
    render() {
        const {logo, collapsed} = this.props;
        return (
            <Layout.Sider
                trigger={null}
                collapsible
                breakpoint="lg"
                collapsed={collapsed}
                width={256}
                className={styles.sider}
            >
                <div className={styles.logo} key="logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                        <h1>KEETOOL</h1>
                    </Link>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera"/>
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload"/>
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        );
    }
}

SiderMenu.propTypes = {
    collapsed: PropTypes.bool.isRequired
};

export default SiderMenu;