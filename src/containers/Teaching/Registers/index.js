import React from "react";
import { DatePicker } from "antd";

class RegistersContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <DatePicker /> <h1>Quản lý học viên</h1>
      </div>
    );
  }
}

RegistersContainer.propTypes = {};

export default RegistersContainer;
