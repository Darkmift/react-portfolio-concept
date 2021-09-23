// theme.ts
import { DefaultTheme } from 'styled-components';
export const lightTheme: DefaultTheme = {
  about: {
    main: '#176583',
    contrastText: '#FFFDFF',
    textShadow: '#6E7480',
  },
  secondary: {
    main: '#709fb0',
    contrastText: '#ffffff',
  },
  appBar: {
    main: '#0C4459',
    contrastText: '#EBFFFF',
  }
};

export const darkTheme: DefaultTheme = {
  about: {
    main: '#080027',
    contrastText: '#FFFEF9',
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
