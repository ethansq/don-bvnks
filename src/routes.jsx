import React from 'react';
import { Route, IndexRoute } from 'react-router';
import UnderConstruction from "./components/under-construction";
import Home from './views/home';

export default (
  <Route>
    <IndexRoute component={Home} />
    <Route path='bio' component={UnderConstruction} />
    <Route path='store' component={UnderConstruction} />
    <Route path='booking' component={UnderConstruction} />
    <Route path='fans' component={UnderConstruction} />
    <Route path='media' component={UnderConstruction} />
    <Route path='store' component={UnderConstruction} />
    <Route path='*' component={Home} />
  </Route>
);