import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { injectGlobal, ThemeProvider, theme } from "./theme/index";
injectGlobal`
    * { margin: 0; padding: 0; }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
