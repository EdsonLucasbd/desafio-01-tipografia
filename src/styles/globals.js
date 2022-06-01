import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  };

  :root {
    --dark-high: ${theme.TextColors.darkHigh};
    --dark-low: ${theme.TextColors.darkLow};
    --dark-medium: ${theme.TextColors.darkMedium};
    --light-high: ${theme.TextColors.lightHigh};
    --light-solid: ${theme.TextColors.lightSolid};
    --magenta: ${theme.TextColors.magenta};
  };
`