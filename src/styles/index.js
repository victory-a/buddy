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
.js-focus-visible :focus:not([data-focus-visible-added]) {
  outline: none;
  box-shadow: none;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 16px;
  min-height: 100%;
  background-color: #f3f5fc;
  font-family: "upgrade", sans-serif;
  -webkit-font-smoothing: antialiased;
  outline: none;
}

p,
a {
  font-size: 0.875rem;
  font-family: "upgrade", sans-serif;
}

a:hover {
  text-decoration: underline;
}

ul {
  list-style-type: none;
}
`;

export default GlobalStyles;
