import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import App from './App';
import history from './history'
import config from '../src/aws-exports'
Amplify.configure(config)
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

// navigator.serviceWorker.register('../public/service-worker.js')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}


ReactDOM.render(
  <div>
    <MobileView />
    <Router history={history}>
      <App />
    </Router>
    <MobileView />
  </div>,
  document.getElementById('root')
);
