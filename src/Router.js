import React from 'react';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import asyncComponent from "./helpers/AsyncFunc";

const Routes = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={`/`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`/screen2`}>
                            Componesnts
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path={'/'} component={asyncComponent(()=>import('./Screen'))}/>
                    <Route path={'/screen2'} component={asyncComponent(()=>import('./Screen2'))}/>
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;