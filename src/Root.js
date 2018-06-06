import React from "react";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import i18n from "./languages/i18n";

let Root = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
};

export default Root;
