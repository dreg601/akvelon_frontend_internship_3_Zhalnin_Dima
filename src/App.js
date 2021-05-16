import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import {Home} from './Home';
import {Registration} from "./Registration";

class App extends Component {
  render() {
    const { history } = this.props
    return (
        <div className="App">
          <Navigation/>
          <Switch>
            <Route history={history} path='/home' component={Home} />
            <Route history={history} path='/registration' component={Registration} />
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
    )
  }
}

export default App;
