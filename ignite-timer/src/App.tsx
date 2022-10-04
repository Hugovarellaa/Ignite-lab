import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global/GlobalStyles'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Hello world</h1>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}
