import React from "react";
import Router from "./Router";
import history from './helpers/history';


let App = () => {
    return (
        <Router history={history}/>
    );
};

export default App;

