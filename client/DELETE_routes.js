//client/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

export const Routes = () => (
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/home' component={Home} />
    </Switch>
);

export default Routes;
