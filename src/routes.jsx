import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import UnderConstruction from "./components/under-construction";
import Home from './views/home';
import Bio from './views/bio';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='bio' component={UnderConstruction} />
    <Route path='store' component={UnderConstruction} />
    <Route path='booking' component={UnderConstruction} />
    <Route path='fans' component={UnderConstruction} />
    <Route path='media' component={UnderConstruction} />
    <Route path='store' component={UnderConstruction} />
    <Route path='store' component={UnderConstruction} />
    <Route path='store' component={UnderConstruction} />
    <Route path='*' component={Home} />
  </Route>
);