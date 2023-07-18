import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;

  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
  }


`;

export default GlobalStyles;
