import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]}
  }

  body, input, button, select, textarea {
    font-family: "Roboto", sans-serif;
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