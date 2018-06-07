import React, { Component } from "react";
import PropTypes from "prop-types";
import generatorFormItem from "../utility/generatorFormItem";
import { Input } from "antd";
import { addPropsComponent, removeProp } from "../../helpers/utility";

const InputComponent = generatorFormItem()(Input);

export default class FormInput extends Component {
  static propTypes = {
    rules: PropTypes.array,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    suffixClear: PropTypes.bool //check clear value of input when click suffix
  };

  static contextTypes = {
    form: PropTypes.object.isRequired
  };

  getValue = () => {
    return this.context.form.getFieldValue(this.props.name);
  };

  setValue = value => {
    this.context.form.setFieldsValue({ [this.props.name]: value });
  };

  //event clear value input
  clear = () => {
    this.setValue("");
  };

  //add suffix clear when click suffix
  addSuffixClearValueToProps = beforeProps => {
    const value = this.getValue();

    if (value) {
      let props = {
        onClick: () => {
          this.clear();
        }
      };

      // add props to suffix
      return addPropsComponent(beforeProps, props, this.props.suffix, "suffix");
    } else {
      //remove suffix in props
      return removeProp(beforeProps, "suffix");
    }
  };

  render() {
    const { suffixClear, suffix } = this.props;
    let props = this.props;

    if (suffixClear && suffix) {
      props = this.addSuffixClearValueToProps(props);
    }

    return <InputComponent {...props} />;
  }
}
