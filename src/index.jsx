import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from './constants/themes';
import GlobalStyles from './global-styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
