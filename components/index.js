import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import App from './App';
import AlgorithmPage from './AlgorithmPage'
import config from '../src/aws-exports'
Amplify.configure(config)

ReactDOM.render(
  <div>
    <h1>Hello, ALGO!!</h1>
    <AlgorithmPage />
  </div>,
  document.getElementById('root')
);