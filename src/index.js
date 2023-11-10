import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import OnsenUI from 'onsenui'
import {auth0config, auth0params} from './config'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider {...auth0config}
      authorizationParams={auth0params} >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
