import React from 'react';
import ReactDOM from 'react-dom';
import { LocationProvider } from './hooks/useLocation';
import App from './App';


import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <LocationProvider>
      <App />
    </LocationProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
