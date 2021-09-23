import React from 'react';
import AppBar from './components/AppBar';
import Switch from './components/UI/Switch';
import Container from './components/UI/Container';
import { useTheme } from './hooks/useTheme';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Logo from './components/UI/Logo';

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

  const onThemeChange = toggleTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container className="App" justifyContent="" alignItems="flex-start">
        <AppBar>
          <Logo />
          <Switch
            isOn={isDarkTheme}
            handleToggle={onThemeChange}
          />
        </AppBar>
      </Container>
    </ThemeProvider>
  );
}

export default App;
