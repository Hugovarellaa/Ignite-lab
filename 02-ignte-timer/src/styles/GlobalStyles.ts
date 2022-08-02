import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
  }

  body {
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body , input , button , textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`
