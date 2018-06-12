import React from "react";
import { translate } from "react-i18next";
// import { DatePicker,  } from "antd";

class DashboardContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}

  render() {
    const { t } = this.props;
    return <div>{t("manage.login.form.description")}</div>;
  }
}

DashboardContainer.propTypes = {};

export default translate(props => props.namespaces)(DashboardContainer);
