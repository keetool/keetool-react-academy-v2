import React from "react";
import PropTypes from "prop-types";
import { Icon, Layout, Menu } from "antd";
import styles from "./index.less";
import { Link } from "react-router-dom";
// import classNames from 'classnames/bind';
import classNamesBind from "classnames/bind";
import { Scrollbars } from "react-custom-scrollbars";
import { translate } from "react-i18next";

let cx = classNamesBind.bind(styles);

class SiderMenu extends React.Component {
  render() {
    const { logo, collapsed, isMobile, fixed, onCollapse, t } = this.props;
    return (
      <Layout.Sider
        trigger={null}
        collapsible
        breakpoint="lg"
        collapsed={collapsed}
        onCollapse={onCollapse}
        width={256}
        className={cx({
          sider: true,
          "sider-fixed": !isMobile && fixed
        })}
      >
        <div
          className={cx({
            logo: true,
            fixed: fixed,
            collapsed: collapsed
          })}
          key="logo"
        >
          <Link to="/">
            <img src={logo} alt="logo" />
            {!collapsed && <h1>KEETOOL</h1>}
          </Link>
        </div>
        <Scrollbars
          className={cx({
            "fixed-logo": fixed
          })}
          style={{ height: "calc(100vh - 64px)" }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="dashboard" />
                <span>{t("manage.sidebar.tab.homepage")}</span>
              </Link>
            </Menu.Item>
            <Menu.SubMenu
              key="teaching"
              title={
                <span>
                  <Icon type="profile" />
                  <span>{t("manage.sidebar.tab.teaching")}</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/teaching/classes">
                  <span>{t("manage.sidebar.tab.class")}</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/teaching/registers">
                  <span>{t("manage.sidebar.tab.student")}</span>
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4">
              <Link to="/log">
                <Icon type="hourglass" />
                <span>{t("manage.sidebar.tab.log")}</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Scrollbars>
      </Layout.Sider>
    );
  }
}

SiderMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  logo: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
  fixed: PropTypes.bool,
  onCollapse: PropTypes.func
};

export default translate(props => props.namespaces)(SiderMenu);
