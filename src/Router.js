import React from 'react';
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import asyncComponent from "./helpers/AsyncFunc";
import {isLoggedIn} from "./helpers/auth";
import AppContainer from "./containers/AppContainer";
import PropTypes from 'prop-types';

const RestrictedRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => isLoggedIn()
            ? <Component {...props} />
            : <Redirect
                to={'/signin'}
            />
        }
    />
);

const Routes = ({history}) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={'/signin'}
                       component={asyncComponent(() => import('./modules/signin/SignInContainer'))}/>
                <Route exact path={'/screen2'}
                       component={asyncComponent(() => import('./containers/AppContainer'))}/>
                <RestrictedRoute
                    path="/"
                    component={AppContainer}
                />
            </Switch>
        </Router>
    );
};

RestrictedRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    path: PropTypes.string.isRequired,
};

Routes.propTypes = {
    history: PropTypes.object,
};

export default Routes;