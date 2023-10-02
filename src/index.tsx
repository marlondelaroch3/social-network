import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store/store'
import { Auth0Provider } from '@auth0/auth0-react';

const auth_client_id = process.env.REACT_APP_AUTH_CLIENT_ID
const auth_domain = process.env.REACT_APP_AUTH_DOMAIN

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth_domain ? auth_domain : ''}
      clientId={auth_client_id ? auth_client_id : ''}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
