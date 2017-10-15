import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Home from './views/home';
import Contact from './views/contact';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={Home} />
  </Route>
);