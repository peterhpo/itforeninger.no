import { createGlobalStyle } from "styled-components";

/**
 * Colors are defined as CSS variables for use to be able to change them in runtime.
 * That also makes them work with media queries, like those for 'prefers-colors-scheme'.
 */

export const FontStyleSheet = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono&display=swap');


  body {
    /* Fonts */
    margin: 0;
    font-family: 'Fira Mono', monospace;
  }

`;