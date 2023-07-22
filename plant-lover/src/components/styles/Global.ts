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

  :root{
    --primaryGreen: #214229;
    --secondaryGreen: #BBDDC3;
    --captionGreen: #747D71;
    --accentPink: #FF5151;
    --background: #FFFFFF;
    --lightGrey: #E5E5E5;
    --grey: #B3B3B3;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
  }

  button{
    font-family: ${({ theme }) => theme.fonts.primary};

  }


  .active{
    color: red;
  }

`;

export default GlobalStyles;
