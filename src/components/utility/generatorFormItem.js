import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "antd";

const generatorFormItem = () => {
  return WrappedComponent => {
    class FormItem extends Component {
      static contextTypes = {
        form: PropTypes.object.isRequired
      };

      constructor(props) {
        super(props);
      }

      render() {
        const { getFieldDecorator } = this.context.form;
        const { onChange, defaultValue, rules, name } = this.props;

        const options = {};

        if (rules) {
          options.rules = rules;
        }

        if (onChange) {
          options.onChange = onChange;
        }

        if (defaultValue) {
          options.initialValue = defaultValue;
        }

        return (
          <Form.Item>
            {getFieldDecorator(name, options)(
              <WrappedComponent {...this.props}>
                {this.props.children}
              </WrappedComponent>
            )}
          </Form.Item>
        );
      }
    }

    return FormItem;
  };
};

export default generatorFormItem;
