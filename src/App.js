import React from "react";
import asyncComponent from "./helpers/AsyncFunc";
import { translate } from "react-i18next";
import GlobalLoading from "./components/GlobalLoading";

const App = ({ tReady }) => {
  if (tReady) {
    const Component = asyncComponent(() =>
      import(/* webpackPreload: true */ "./Router")
    );
    return <Component />;
  } else {
    return <GlobalLoading />;
  }
};

export default translate(props => props.namespaces)(App);
