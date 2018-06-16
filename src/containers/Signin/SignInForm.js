import React from "react";
import { Form, Alert } from "antd";
import styles from "./styles.less";
import { translate } from "react-i18next";
import CustomForm from "../../components/common/Form";
import FormInput from "../../components/common/FormInput";
import FormButton from "../../components/common/FormButton";
import Icon from "../../components/common/Icon";
import { signin } from "../../actions/signinActions";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.setData = this.setState.bind(this);
  }

  state = {
    isLoading: false,
    messageError: false
  };

  handleSubmit = values => {
    signin(values, this.setData);
  };

  renderMessageError = content => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={content}
        type="error"
        showIcon
      />
    );
  };

  render() {
    const { t } = this.props;
    return (
      <div className={styles.login}>
        {!this.state.isLoading &&
          this.state.messageError &&
          this.renderMessageError(this.state.messageError)}

        <CustomForm onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            rules={[
              {
                required: true,
                message: t("manage.login.form.please_input_your_username")
              }
            ]}
            prefix={<Icon type="user" />}
            suffix={<Icon type="close-circle" />}
            suffixClear
            placeholder={t("manage.login.form.username")}
          />
          <FormInput
            name="password"
            rules={[
              {
                required: true,
                message: t("manage.login.form.please_input_your_password")
              }
            ]}
            prefix={<Icon type="lock" />}
            suffix={<Icon type="close-circle" />}
            suffixClear
            type="password"
            placeholder={t("manage.login.form.password")}
          />
          <FormButton
            type="primary"
            htmlType="submit"
            size="large"
            className={styles.submit}
            loading={this.state.isLoading}
          >
            {t("manage.login.form.login")}
          </FormButton>
        </CustomForm>
      </div>
    );
  }
}

export default translate(props => props.namespaces)(Form.create()(SignInForm));
