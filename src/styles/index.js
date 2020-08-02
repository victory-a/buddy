import { createGlobalStyle } from "styled-components";

const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1025px",
  desktop: "1441px"
};

export const device = {
  mobile: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  html, body {
  width: 100%;
    height: 100%;
    font-size: 16px;
    min-height: 100%;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    outline: none;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyles;
