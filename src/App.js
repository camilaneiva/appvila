import { ThemeProvider } from 'styled-components'
import { theme } from './design-system/theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  )
}

export default App
