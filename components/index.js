import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import config from '../src/aws-exports.js';
Amplify.configure(config)
import App from './Test'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
