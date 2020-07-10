import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import App from './App';
import history from './history'
import config from '../src/aws-exports'
Amplify.configure(config)

ReactDOM.render(
  <div>
    <Router history={history}>
      <App />
    </Router>
  </div>,
  document.getElementById('root')
);
