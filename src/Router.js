import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import asyncComponent from "./helpers/AsyncFunc";
import { isLoggedIn } from "./helpers/auth";
import AppContainer from "./containers/App/index";
import PropTypes from "prop-types";
import history from "./helpers/history";
import { LocaleProvider } from "antd";
import getLocale from "./languages/i18nAntd";
import i18n from "./languages/i18n";

const RestrictedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to={"/signin"} />
    }
  />
);

const Routes = () => {
  return (
    
    <LocaleProvider locale={getLocale(i18n.language)}>{/* config language for ant design*/}
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={"/signin"}
            component={asyncComponent(() =>
              import("./containers/Signin/index")
            )}
          />
          <RestrictedRoute path="/" component={AppContainer} />
        </Switch>
      </Router>
    </LocaleProvider>
  );
};

RestrictedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  path: PropTypes.string.isRequired
};

export default Routes;
