import React from "react";
import { translate } from "react-i18next";
class ClassesContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}

  render() {
    const { t } = this.props;
    return <div>{t("Hello")}</div>;
  }
}

ClassesContainer.propTypes = {};

export default translate(props => props.namespaces)(ClassesContainer);
