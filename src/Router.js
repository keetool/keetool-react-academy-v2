import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import asyncComponent from "./helpers/AsyncFunc";
import { isLoggedIn } from "./helpers/auth";
import AppContainer from "./containers/App/index";
import PropTypes from "prop-types";
import history from "./helpers/history";

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
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={"/signin"}
          component={asyncComponent(() => import("./containers/Signin/index"))}
        />
        <RestrictedRoute path="/" component={AppContainer} />
      </Switch>
    </Router>
  );
};

RestrictedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  path: PropTypes.string.isRequired
};

export default Routes;
