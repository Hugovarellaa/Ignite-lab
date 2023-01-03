import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global/GlobalStyles'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>First render</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}