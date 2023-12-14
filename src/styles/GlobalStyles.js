import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none; 
  }

`;

export default GlobalStyles;
