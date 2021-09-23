import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { defaultTheme } from './theme'
// theme is also fully typed
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.palette.primary.main};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
