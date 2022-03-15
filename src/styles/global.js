import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.fonts.family};
      font-size: ${theme.fonts.sizes.normal};
      color: ${theme.colors.text};
      background-color: ${theme.colors.secondary};
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.text};
      cursor: pointer;
    }
  `}
`;

export default GlobalStyles;
