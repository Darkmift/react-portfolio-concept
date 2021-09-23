import * as styledComponents from "./styled-components";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
}

const theme = {
  primaryColor: "#e9e9eb"
};

export default styled;
export { theme, css, injectGlobal, keyframes, ThemeProvider };
