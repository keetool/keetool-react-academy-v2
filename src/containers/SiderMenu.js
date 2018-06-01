import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Layout, Menu} from "antd";

class SiderMenu extends React.Component {



    render() {
        return (
            <Layout.Sider
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
            >
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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