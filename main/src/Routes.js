import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Results from "./Results/Results";
import Interview from "./Interview/Interview";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Interview" component={Interview} />
                    <Route path="/Results" component={Results} />
                </Switch>
            </Router>
        )
    }
}
