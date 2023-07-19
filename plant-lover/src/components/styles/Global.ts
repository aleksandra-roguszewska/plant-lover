import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;

  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
  }

  button{
    font-family: ${({ theme }) => theme.fonts.primary};
  }


`;

export default GlobalStyles;
