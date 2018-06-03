import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Badge, Divider, Dropdown, Icon, Layout, Menu, Tooltip} from "antd";
import styles from './styles.less';
import {Link} from "react-router-dom";
import {LOGO_HEADER} from "../../constants";
import classNamesBind from 'classnames/bind';
import {signout} from "../../helpers/auth";
// import classNames from 'classnames';

let cx = classNamesBind.bind(styles);

const menu = (
    <Menu className={styles.menu} selectedKeys={[]}>
        <Menu.Item>
            <Icon type="user"/>Trang cá nhân
        </Menu.Item>
        <Menu.Item>
            <Icon type="setting"/> Cài đặt
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="logout" onClick={signout}>
            <Icon type="logout"/>Đăng xuất
        </Menu.Item>
    </Menu>
);

class GlobalHeader extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const {isMobile, collapsed, onCollapse, fixedSider, fixed} = this.props;
        return (
            <Layout.Header className={cx({
                'layout-header': true,
                'header-fixed-top': fixed,
            })}>
                <div className={cx({
                    'header': true,
                    'fixed-sider': fixedSider,
                    'collapse-sider-left': fixedSider && collapsed,
                    'collapse-sider-left-mobile': isMobile,
                })}>
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
                    <div className={styles.right}>
                        <Tooltip title="Help" placement="bottom">
                            <a
                                href="#"
                                className={styles.action}
                            >
                                <Icon type="question-circle-o"/>
                            </a>
                        </Tooltip>
                        <Tooltip title="Notification" placement="bottom">

                            <a
                                href="#"
                                className={styles.action}
                            >
                                <Badge count={21}>
                                    <Icon type="bell"/>
                                </Badge>
                            </a>

                        </Tooltip>
                        <Dropdown overlay={menu}>
                              <span className={`${styles.action} ${styles.account}`}>
                                <Avatar size="small" className={styles.avatar}
                                        src={'http://d1j8r0kxyu9tj8.cloudfront.net/webs/logo1.jpg'}/>
                                <span className={styles.name}>Admin</span>
                              </span>
                        </Dropdown>
                    </div>
                </div>
            </Layout.Header>
        );
    }
}

GlobalHeader.propTypes = {
    onCollapse: PropTypes.func.isRequired,
    collapsed: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool,
    fixedSider: PropTypes.bool,
    fixed: PropTypes.bool,
};

export default GlobalHeader;