// manage the routes for the application here

import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './Login';
import AppNavbar from './AppNavbar';
import Signup from './Signup';
import Home from './Home';
import Profile from './Profile';
import CharacterCreate from './CharacterCreate';

class Routes extends Component {
  render () {
      return (
          <div className="Page">
              <AppNavbar />
              <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route path="/login" component={ Login } />
                  <Route exact path="/signup" component={ Signup } />
                  <Route exact path="/profile" component={ Profile } />
                  <Route exact path="/create" component={ CharacterCreate } />
              </Switch>
          </div>
      );
  }
}

export default Routes;
