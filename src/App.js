import React, { Component } from 'react';
import {  Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, } from 'react-router-dom'

import './App.scss';
import Home from './views/home';
import Login from './views/login';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={() => <div>404</div>} />
          </Switch>
        </Router>
    );
  }
}


export default App;
