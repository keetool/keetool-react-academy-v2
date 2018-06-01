import React from 'react';
import {Layout} from "antd";
import GlobalHeader from "../components/GlobalHeader";
import SiderMenu from "../components/SiderMenu";
import GlobalFooter from "./GlobalFooter";
import {enquireScreen, unenquireScreen} from "enquire-js";
import {LOGO_SIDER} from "../constants";
import {ContainerQuery} from "react-container-query";
import classNames from "classnames";

let isMobile;
enquireScreen(b => {
    isMobile = b;
});


const query = {
    'screen-xs': {
        maxWidth: 575,
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991,
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
    },
    'screen-xl': {
        minWidth: 1200,
    },
};

class AppContainer extends React.Component {
    state = {
        collapsed: true,
        isMobile: isMobile
    };

    componentDidMount() {
        this.enquireHandler = enquireScreen(mobile => {
            if (mobile) {
                this.setState({
                    isMobile: mobile,
                    collapsed: true,
                });
            } else {
                this.setState({
                    isMobile: false,
                });
            }

        });
    }

    componentWillUnmount() {
        unenquireScreen(this.enquireHandler);
    }

    handleMenuCollapse = (collapsed) => {
        this.setState({
            collapsed: collapsed ? collapsed : !this.state.collapsed,
        });
    };

    render() {
        const {collapsed, isMobile} = this.state;
        const layout = (
            <Layout style={{ flexDirection: "row", overflowX: "hidden" }} hasSider>

                <SiderMenu
                    logo={LOGO_SIDER}
                    collapsed={collapsed}
                    isMobile={isMobile}
                    onCollapse={this.handleMenuCollapse}
                    fixed
                />

                <Layout>
                    <GlobalHeader
                        collapsed={collapsed}
                        onCollapse={this.handleMenuCollapse}
                        isMobile={isMobile}
                        fixed
                    />
                    <Layout.Content style={{margin: '24px 24px 0', height: '2000px'}}>
                        Content
                    </Layout.Content>
                    <GlobalFooter/>
                </Layout>
            </Layout>
        );
        return (
            <ContainerQuery query={query}>
                {params => <div className={classNames(params)}>{layout}</div>}
            </ContainerQuery>
        );
    }
}

AppContainer.propTypes = {};

export default AppContainer;