import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global/GlobalStyles'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      App
      <GlobalStyles />
    </ThemeProvider>
  )
}
