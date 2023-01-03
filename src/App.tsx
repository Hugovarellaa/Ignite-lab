import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>First render</h1>
    </ThemeProvider>
  );
}
