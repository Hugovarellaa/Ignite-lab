import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }

  html, body {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  body {
    background-color: ${({ theme }) => theme['gray-900']} ;
    color: ${({ theme }) => theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body , input , button , textarea, select {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
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
