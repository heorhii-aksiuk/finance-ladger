import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { common as theme } from './theme'
import { AppContainer } from './App.styled'
import AppBar from './components/AppBar'
import Hero from './components/Hero'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppBar />
      <AppContainer>
        <Hero />
      </AppContainer>
    </ThemeProvider>
  )
}
