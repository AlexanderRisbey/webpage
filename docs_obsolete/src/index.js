import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/fix.css'
import './assets/css/main.css'

import reportWebVitals from './reportWebVitals';
import RouterComponent from './pages/Router';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterComponent />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
