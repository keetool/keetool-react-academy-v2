import React from "react";
import { I18nextProvider } from "react-i18next";
import App from "./App";

import { LocaleProvider } from "antd";
import zhCN from "antd/lib/locale-provider/en_US";
import i18n from "./languages/i18n";

let Root = () => {
  return (
    <LocaleProvider locale={zhCN}>
      <I18nextProvider i18n={i18n}>
        <App/>
      </I18nextProvider>
    </LocaleProvider>
  );
};

export default Root;
