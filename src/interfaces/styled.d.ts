// styled.d.ts
import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}
interface ViewPalette {
  main: string
  contrastText: string
  textShadow: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    about: ViewPalette
    secondary: IPalette
    appBar: IPalette
  }
}