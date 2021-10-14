import React, { useState } from 'react'
import styled from 'styled-components';

import AppBar from './AppBar';
import SwitchLinksWrapper from './SwitchLinksWrapper';
import Switch from '../UI/Switch';
import Container from '../UI/Container';
import Logo from '../UI/Logo';

import { scrollTo } from "../../utils/scrollTo";
import burgerIcon from '../../assets/images/burgerIcon.svg';

import { useWindowSize } from '../../hooks/useWindowSize';

interface Props {
  isDarkTheme: boolean,
  onThemeChange: React.MouseEventHandler<HTMLDivElement>
}

interface StyledProps {
  windowWidth?: number;
}

const Img = styled.img<StyledProps>`
width:35px;
`

const AppNav = (props: Props): JSX.Element => {
  const [width /*, height*/] = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const isSmallScreen = width < 700;

  return (
    <Container sticky={true} className="App" justifyContent="" alignItems="flex-start">
      <AppBar>
        <Logo onClick={() => scrollTo({ elName: 'main' })} />
        <SwitchLinksWrapper show={isOpen}>
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
        {isSmallScreen && <Img onClick={() => setIsOpen(prev => !prev)} src={burgerIcon} />}
      </AppBar>
    </Container>
  )
}

export default AppNav
