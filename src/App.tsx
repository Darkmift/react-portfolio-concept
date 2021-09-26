import React from 'react';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useTheme } from './hooks/useTheme';

import AppNav from './components/AppNav'
// theme is also fully typed
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.about.main};
  }

  #root {
    margin:0;
  }
`;

const App: React.FunctionComponent = (): JSX.Element => {

  const [theme, toggleTheme, isDarkTheme] = useTheme()
  const onThemeChange = toggleTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppNav
        onThemeChange={onThemeChange}
        isDarkTheme={isDarkTheme} />
    </ThemeProvider>
  );
}

export default App;
