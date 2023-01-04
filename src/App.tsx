import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CycleProvider } from './context/useCycle'
import { Router } from './Router'
import { GlobalStyles } from './styles/global/GlobalStyles'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleProvider>
          <Router />
        </CycleProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
