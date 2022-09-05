import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global/GlobalStyles'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>App</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}
