import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import AlgosByCategories from './AlgosByCategories';
// import App from './App';
import AlgorithmPage from './AlgorithmPage'
import Home from './Home'
import config from '../src/aws-exports'
Amplify.configure(config)

ReactDOM.render(
  <div>
    {/* <h1>Hello, ALGO!!</h1> */}
    <AlgorithmPage />
    {/* <App /> */}
  </div>,
  document.getElementById('root')
);
