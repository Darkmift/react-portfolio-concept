// styled.d.ts
import 'styled-components';
interface IPalette {
  main: string;
  contrastText: string;
}
interface ViewPalette {
  main: string;
  contrastText: string;
  textShadow: string;
  button?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    main: ViewPalette;
    pages: ViewPalette;
    secondary: IPalette;
    appBar: IPalette;
  }
}
