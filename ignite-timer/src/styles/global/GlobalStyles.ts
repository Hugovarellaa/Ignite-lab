import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: black;
    color: white;
  }

  body, input, button, select, textarea {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.7;
    cursor: not-allowed;
  }
`