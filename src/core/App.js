import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route} from 'react-router';
import { createBrowserHistory} from "history";
import DashboardPage from '../components/Pages/DashboardPage';
import LoginPage from "../components/Pages/LoginPage";

import logo from '../logo.svg';
import './App.css';
import {ProtectedRoute} from "../components/Routes/ProtectedRoute";
import RegisterPage from "../components/Pages/RegisterPage";

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    const {dispatch} = this.props;
  }

  render() {
    return (
        /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/

        <div className="jumbotron">
          <div className="container">
            <div className="col-sm-8-col-sm-offset-2">
              {
                /* You're not logged in alert crap here. */
              }
              <Router history={history}>
                <div>
                  <ProtectedRoute exact path="/" component={DashboardPage}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/register" component={RegisterPage}/>
                </div>
              </Router>
            </div>
          </div>
        </div>
    );
  }
}

export default connect()(App);
