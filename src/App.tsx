import React from 'react'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useTheme } from './hooks/useTheme'

import AppNav from './components/Navigation/AppNav'
import Main from './components/pages/Main'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Project from './components/pages/Projects'




// theme is also fully typed
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    font-family: 'Tahoma';
  }

  [data-scroll-to]{
    height:1px;
    width:1px;
  }

  body {
    background-color: ${(props) => props.theme.pages.main};
  }

  .page{
    min-height:100vh;
    width:100%;
    padding:0;
    padding-top:20px;
    margin:0;
    color: ${(props) => props.theme.pages.contrastText};
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
      {/* GLOBAL STYLE */}
      <GlobalStyle />
      {/* MAIN NAV */}
      <AppNav
        onThemeChange={onThemeChange}
        isDarkTheme={isDarkTheme} />
      {/* PAGES */}
      <Main />
      <About />
      <Project />
      <Contact />

    </ThemeProvider>
  );
}

export default App;
