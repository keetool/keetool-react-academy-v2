import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { saveToken } from "../../helpers/auth";
import history from "../../helpers/history";
import styles from "./styles.less";
import { translate } from "react-i18next";
class SignInForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(err => {
      if (!err) {
        saveToken("dsadsadsa");
        history.push("/");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { t } = this.props;
    return (
      <div className={styles.login}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder={t("login.form.password")}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder={t("login.form.username")}
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className={styles.submit}
            >
              {t("login.form.login")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default translate(props => props.namespaces)(Form.create()(SignInForm));
