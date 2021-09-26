import React from 'react'

import AppBar from './AppBar';
import Switch from './UI/Switch';
import Container from './UI/Container';
import Logo from './UI/Logo';

interface Props {
  isDarkTheme: boolean,
  onThemeChange: React.MouseEventHandler<HTMLDivElement>
}

const AppNav = (props: Props): JSX.Element => {

  return (
    <Container className="App" justifyContent="" alignItems="flex-start">
      <AppBar>
        <Logo />
        <Switch
          isOn={props.isDarkTheme}
          handleToggle={props.onThemeChange}
        />
      </AppBar>
    </Container>
  )
}

export default AppNav
