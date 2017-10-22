import React from 'react';
import ReactDom from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import * as firebase from 'firebase';

const firebaseConfig = require('../firebase.json');
firebase.initializeApp(firebaseConfig);

require('./stylesheets/base.scss');

ReactDom.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#app')
);