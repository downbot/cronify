import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import OnsenUI from 'onsenui';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="cugli.auth0.com"
      clientId="7GqoTfTRRm7mpGRor8ZxLM2j9En2AUgj"
      authorizationParams={{
          redirect_uri: window.location.origin + window.location.pathname,
          audience: 'https://cronify/hasura',
          //display: 'touch',
          //prompt: 'consent',
          scope: 'profile' }} >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
