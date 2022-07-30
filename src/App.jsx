import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { common as theme } from './theme'
import { AppContainer } from './App.styled'
import AppBar from './components/AppBar'
import Hero from './components/Hero'
import About from './components/About'
import Cases from './components/Cases'
import Blog from './components/Blog'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <AppBar />
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <Contact />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}
