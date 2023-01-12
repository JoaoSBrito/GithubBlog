import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
    --webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
  }
`