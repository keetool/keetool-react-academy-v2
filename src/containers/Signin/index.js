import React from "react";
import SignInForm from "./SignInForm";
import styles from "./styles.less";
import { Link } from "react-router-dom";
import { LOGO_HEADER_SIGN_IN } from "../../constants";
import { translate } from "react-i18next";

class SignInContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { t } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img
                  alt="logo"
                  className={styles.logo}
                  src={LOGO_HEADER_SIGN_IN}
                />
              </Link>
            </div>
            <div className={styles.desc}>{t("manage.login.form.description")}</div>
          </div>
          <div className={styles.main}>
            <SignInForm />
          </div>
        </div>
      </div>
    );
  }
}

SignInContainer.propTypes = {};

export default translate(props => props.namespaces)(SignInContainer);
