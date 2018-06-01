import React from 'react';
import SiderMenu from "./SiderMenu";
import {Layout} from "antd";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "./GlobalFooter";
import {enquireScreen, unenquireScreen} from "enquire-js";

let isMobile;
enquireScreen(b => {
    isMobile = b;
});

class AppContainer extends React.Component {
    state = {
        collapsed: true,
        isMobile: isMobile
    };

    componentDidMount() {
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
                isMobile: mobile,
            });
        });
    }

    componentWillUnmount() {
        unenquireScreen(this.enquireHandler);
    }

    handleMenuCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {collapsed, isMobile} = this.state;
        return (
            <Layout>
                <SiderMenu collapsed={collapsed} isMobile={isMobile}/>
                <Layout>
                    <GlobalHeader collapsed={collapsed} onCollapse={this.handleMenuCollapse}/>
                    <Layout.Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        Content
                    </Layout.Content>
                    <GlobalFooter/>
                </Layout>
            </Layout>
        );
    }
}

AppContainer.propTypes = {};

export default AppContainer;