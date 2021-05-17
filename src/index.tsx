import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from './constants/themes.constant';
import GlobalStyles from './global-styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
