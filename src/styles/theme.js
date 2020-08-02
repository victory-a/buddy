import { theme } from "@chakra-ui/core";
import colors from "./colors";

const breakpoints = ["320px", "375px", "425px", "768px", "1025px", "1441px", "2561px"];

breakpoints.mobileS = breakpoints[0];
breakpoints.mobileM = breakpoints[1];
breakpoints.mobileL = breakpoints[2];
breakpoints.tablet = breakpoints[3];
breakpoints.laptop = breakpoints[4];
breakpoints.laptopL = breakpoints[5];
breakpoints.desktop = breakpoints[6];

export default {
  ...theme,
  breakpoints,
  fonts: {
    heading: "'upgrade-lights', sans-serif",
    body: "'upgrade', sans-serif",
    mono: "'upgrade-lights',sans-serif"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  },
  colors: {
    ...theme.colors,
    aella: {
      ...colors
    }
  }
};
