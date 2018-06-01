import React from 'react';
import SiderMenu from "./SiderMenu";
import {Layout} from "antd";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "./GlobalFooter";

class AppContainer extends React.Component {
    state = {
        collapsed: true,
    };

    handleMenuCollapse = () => {
        console.log("ok");
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {collapsed} = this.state;
        return (
            <Layout>
                <SiderMenu collapsed={collapsed}/>
                <Layout>
                    <GlobalHeader collapsed={collapsed} onCollapse={this.handleMenuCollapse}/>
                    <Layout.Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
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