import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { common as theme } from './theme'
import { AppContainer } from './App.styled'
import AppBar from './components/AppBar'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <AppBar />
      </AppContainer>
    </ThemeProvider>
  )
}
