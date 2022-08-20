import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
  }

  body {
    color: ${({ theme }) => theme['gray-100']};
    background-color: ${({ theme }) => theme['gray-900']};
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }


`
