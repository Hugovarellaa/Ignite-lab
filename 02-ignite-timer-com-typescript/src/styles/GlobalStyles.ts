import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    border: 0;
  }
  
  body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, select, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  [disabled]{
    opacity: 0.7;
    cursor: not-allowed;
  }
`
