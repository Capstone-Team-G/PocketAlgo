import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import AlgosByCategories from './AlgosByCategories';
import config from '../src/aws-exports'
Amplify.configure(config)

ReactDOM.render(
  <div>
    < AlgosByCategories />
  </div>,
  document.getElementById('root')
);
