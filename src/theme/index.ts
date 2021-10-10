// theme.ts
import { DefaultTheme } from 'styled-components';
export const lightTheme: DefaultTheme = {
  main: {
    main: '#176583',
    contrastText: '#F7FCFE',
    textShadow: '#6E7480',
    button: '#E99589',
  },
  pages: {
    main: '#F29188',
    contrastText: '#F7FCFE',
    textShadow: '#6E7480',
  },
  secondary: {
    main: '#709fb0',
    contrastText: '#ffffff',
  },
  appBar: {
    main: '#0C4459',
    contrastText: '#EBFFFF',
  },
};

export const darkTheme: DefaultTheme = {
  main: {
    main: '#080027',
    contrastText: '#FFFEFD',
    textShadow: '#1A064D',
    button: '#630095',
  },
  pages: {
    main: '#630095',
    contrastText: '#FFFEFD',
    textShadow: '#1A064D',
  },
  secondary: {
    main: '#709fb0',
    contrastText: '#ffffff',
  },
  appBar: {
    main: '#040017',
    contrastText: '#F7F4FF',
  },
};
