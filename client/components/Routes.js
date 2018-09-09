// manage the routes for the application here

import React, { Component } from 'react';
// import axios from 'axios';
// import { Route, Switch, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Login from './login/Login';
import AppNavbar from './common/AppNavbar';
import Signup from './signup/Signup';
import Home from './home/Home';
import Profile from './profile/Profile';
import CharacterCreate from './profile/CharacterCreate';

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
