import React, { Component } from "react";
import { getLogs } from "../../actions/logActions";
import { parseLog } from "../../helpers/parse";
import { withAccount } from "../../components/context/AccountContext";
import { Table } from "antd";
import styles from "./styles.less";
import { translate } from "react-i18next";
import { capitalizeFirstLetter, formatSortTable } from "../../helpers/utility";
import { formatTime } from "../../helpers/time";

const columns = t => {
  return [
    {
      title: capitalizeFirstLetter(t("manage.log.table.header_column_action")),
      dataIndex: "action",
      key: "action",
      render: text => `${capitalizeFirstLetter(t(text))}`,
      width: "30%"
    },
    {
      title: capitalizeFirstLetter(t("manage.log.table.header_column_content")),
      dataIndex: "message",
      key: "message",
      width: "30%",
      render: (text, row, index) => {
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: text
            }}
          />
        );
      }
    },
    {
      title: capitalizeFirstLetter(t("manage.log.table.header_column_time")),
      dataIndex: "created_at",
      key: "created_at",
      sorter: true
    }
  ];
};

class LogsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.setData = this.setState.bind(this);
  }

  state = {
    isLoading: true,
    data: [],
    pagination: null
  };

  componentDidMount() {
    getLogs(this.setData);
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    getLogs(this.setData, {
      page: pagination.current,
      sortCreatedAt: formatSortTable(sorter, "created_at"),
      ...filters
    });
  };

  render() {
    const { data, isLoading, pagination } = this.state;
    const { account, t } = this.props;

    const dataSource = data
      ? data.map(log => {
          return {
            action: log.action,
            message: parseLog(log.log, account.id),
            created_at: formatTime(log.created_at)
          };
        })
      : [];

    return (
      <div className={styles["table-log"]}>
        <Table
          dataSource={dataSource}
          columns={columns(t)}
          rowKey={(record, index) => index}
          loading={isLoading}
          pagination={pagination}
          onChange={this.handleTableChange}
          scroll={{ y: "60vh" }}
        />
      </div>
    );
  }
}

export default translate(props => props.namespaces)(withAccount(LogsContainer));
