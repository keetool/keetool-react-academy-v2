import React, { Component } from "react";
import { Icon } from "antd";

export default class IconCustom extends Component {
  render() {
    return <Icon style={{ color: "rgba(0,0,0,.25)" }} {...this.props} />;
  }
}
