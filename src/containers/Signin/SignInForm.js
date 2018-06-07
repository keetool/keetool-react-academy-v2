import React from "react";
import { Form } from "antd";
import { saveToken } from "../../helpers/auth";
import history from "../../helpers/history";
import styles from "./styles.less";
import { translate } from "react-i18next";
import CustomForm from "../../components/common/Form";
import FormInput from "../../components/common/FormInput";
import FormButton from "../../components/common/FormButton";
import Icon from "../../components/common/Icon";

class SignInForm extends React.Component {
  handleSubmit = values => {
    console.log(values);
    saveToken("dsadsa");
    history.push("/");
  };

  render() {
    const { t } = this.props;
    return (
      <div className={styles.login}>
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
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
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
          >
            {t("manage.login.form.login")}
          </FormButton>
        </CustomForm>
      </div>
    );
  }
}

export default translate(props => props.namespaces)(Form.create()(SignInForm));
