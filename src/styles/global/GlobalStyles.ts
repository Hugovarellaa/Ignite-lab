import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-100"]};
  }
`;
