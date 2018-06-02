import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Layout, Menu} from "antd";
import styles from './index.less';
import {Link} from "react-router-dom";
// import classNames from 'classnames/bind';
import classNamesBind from 'classnames/bind';
import {Scrollbars} from 'react-custom-scrollbars';

let cx = classNamesBind.bind(styles);

class SiderMenu extends React.Component {
    render() {
        const {logo, collapsed, isMobile, fixed, onCollapse} = this.props;
        return (
            <Layout.Sider
                trigger={null}
                collapsible
                breakpoint="lg"
                collapsed={collapsed}
                onCollapse={onCollapse}
                width={256}
                className={cx({
                    'sider': true,
                    'sider-fixed': !isMobile && fixed
                })}
            >
                <div
                    className={cx({
                        'logo': true,
                        'fixed': fixed,
                        'collapsed': collapsed
                    })}
                    key="logo"
                >
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                        {!collapsed && <h1>KEETOOL</h1>}

                    </Link>
                </div>
                <Scrollbars
                    className={cx({
                        'fixed-logo': fixed
                    })}
                    style={{height: 'calc(100vh - 64px)!important;'}}
                >
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
                        </Menu.Item><Menu.Item key="45">
                        <Icon type="user"/>
                        <span>nav 1</span>
                    </Menu.Item>
                        <Menu.Item key="345">
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="542">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item><Menu.Item key="54325">
                        <Icon type="user"/>
                        <span>nav 1</span>
                    </Menu.Item>
                        <Menu.Item key="5423">
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="575">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="54572">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item><Menu.Item key="544325">
                        <Icon type="user"/>
                        <span>nav 1</span>
                    </Menu.Item>
                        <Menu.Item key="54323">
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="325">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="565375">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="545765472">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item><Menu.Item key="57744325">
                        <Icon type="user"/>
                        <span>nav 1</span>
                    </Menu.Item>
                        <Menu.Item key="5435523">
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="32775">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Scrollbars>
            </Layout.Sider>
        );
    }
}

SiderMenu.propTypes = {
    collapsed: PropTypes.bool.isRequired
};

export default SiderMenu;