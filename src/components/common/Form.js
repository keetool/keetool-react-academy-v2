import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "antd";

class CustomForm extends Component {
  getChildContext() {
    return {
      form: this.props.form
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  getForm = () => {
    return this.props.form;
  };

  render() {
    return <Form onSubmit={this.handleSubmit}>{this.props.children}</Form>;
  }
}

CustomForm.childContextTypes = {
  form: PropTypes.object.isRequired
};

CustomForm.propTypes = {
  className: PropTypes.string,
  rules: PropTypes.array,
  onSubmit: PropTypes.func
};

export default Form.create()(CustomForm);
