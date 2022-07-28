import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyles } from "./styles/GlobalStyles";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <Button />
      <Button />
      <GlobalStyles />
    </ThemeProvider>
  );
}
