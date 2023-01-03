import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 @media(max-width: 1080px){
    html {
      font-size: 100%;
    }
  }
  @media(max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["green-500"]}
  }

  body {
    background-color: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-100"]};
  }

  body, button ,input, select , textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  [disabled]{
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
