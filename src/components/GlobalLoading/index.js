import React from "react";
import { Spin } from "antd";
import styles from "./styles.less";

class GlobalLoading extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className={styles["container-loading"]}>
        <Spin  size="large"/>
      </div>
    );
  }
}

export default GlobalLoading;
