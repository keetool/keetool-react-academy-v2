import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "antd";

export default class FormButton extends Component {
  static propTypes = {
    type: PropTypes.string,
    htmlType: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    return (
      <Form.Item>
        <Button {...this.props}>{this.props.children}</Button>
      </Form.Item>
    );
  }
}
