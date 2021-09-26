import React from 'react'

import AppBar from './AppBar';
import SwitchLinksWrapper from './SwitchLinksWrapper';
import Switch from '../UI/Switch';
import Container from '../UI/Container';
import Logo from '../UI/Logo';

import { scrollTo } from "../../utils/scrollTo";

interface Props {
  isDarkTheme: boolean,
  onThemeChange: React.MouseEventHandler<HTMLDivElement>
}

const AppNav = (props: Props): JSX.Element => {

  return (
    <Container sticky={true} className="App" justifyContent="" alignItems="flex-start">
      <AppBar>
        <Logo onClick={() => scrollTo({ elName: 'main' })} />
        <SwitchLinksWrapper >
          <ul>
            <li onClick={() => scrollTo({ elName: 'about' })}>About</li>
            <li onClick={() => scrollTo({ elName: 'projects' })}>Projects</li>
            <li onClick={() => scrollTo({ elName: 'contact' })}>Contact</li>
          </ul>

          <Switch
            isOn={props.isDarkTheme}
            handleToggle={props.onThemeChange}
          />
        </SwitchLinksWrapper>
      </AppBar>
    </Container>
  )
}

export default AppNav
