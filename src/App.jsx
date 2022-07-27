import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { common as theme } from './theme'
import { AppContainer } from './App.styled'
import AppBar from './components/AppBar'
import Hero from './components/Hero'
import About from './components/About'
import Cases from './components/Cases'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppBar />
      <AppContainer>
        <Hero />
        <About />
        <Cases />
      </AppContainer>
    </ThemeProvider>
  )
}
