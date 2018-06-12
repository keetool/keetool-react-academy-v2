import React from "react";
import { Layout } from "antd";
import GlobalHeader from "../../components/GlobalHeader";
import SiderMenu from "../../components/SiderMenu";
import GlobalFooter from "../../components/GlobalFooter";
import { enquireScreen, unenquireScreen } from "enquire-js";
import { LOGO_SIDER, QUERY_SCREEN } from "../../constants/index";
import { ContainerQuery } from "react-container-query";
import classNamesBind from "classnames/bind";
import classNames from "classnames";
import styles from "./styles.less";
import AppRoutes from "../../routes/AppRoutes";
import { setHeaderToken } from "../../helpers/axios";
import { getAccount } from "../../actions/accoutActions";
import { AccountProvider } from "../../components/context/AccountContext";

let cx = classNamesBind.bind(styles);

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class AppContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setData = this.setState.bind(this);
  }

  state = {
    collapsed: false,
    isMobile: isMobile,
    account: {
      isLoading: false
    }
  };

  componentDidMount() {
    setHeaderToken();
    getAccount(this.setData);

    this.enquireHandler = enquireScreen(mobile => {
      if (mobile) {
        this.setState({
          isMobile: mobile,
          collapsed: true
        });
      } else {
        this.setState({
          isMobile: false
        });
      }
    });
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  handleMenuCollapse = collapsed => {
    this.setState({
      collapsed: collapsed ? collapsed : !this.state.collapsed
    });
  };

  render() {
    const { collapsed, isMobile } = this.state;
    const FIXED_HEADER = true;
    const FIXED_SIDER = true;
    const layout = (
      <Layout hasSider>
        <SiderMenu
          logo={LOGO_SIDER}
          collapsed={collapsed}
          isMobile={isMobile}
          onCollapse={this.handleMenuCollapse}
          fixed={FIXED_SIDER}
        />
        <Layout>
          <GlobalHeader
            collapsed={collapsed}
            onCollapse={this.handleMenuCollapse}
            isMobile={isMobile}
            fixed={FIXED_HEADER}
            fixedSider={FIXED_SIDER}
          />
          <Layout>
            <div
              className={cx({
                "layout-content": true,
                "fixed-sider": FIXED_SIDER,
                "fixed-header-top": FIXED_HEADER,
                "collapse-sider-left": FIXED_SIDER && collapsed,
                "collapse-sider-left-mobile": isMobile
              })}
            >
              <Layout.Content>
                <div className={styles.content}>
                  <AppRoutes />
                </div>
              </Layout.Content>
              <GlobalFooter />
            </div>
          </Layout>
        </Layout>
      </Layout>
    );
    return (
      <AccountProvider value={this.state.account}>
        <ContainerQuery query={QUERY_SCREEN}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </AccountProvider>
    );
  }
}

AppContainer.propTypes = {};

export default AppContainer;
