import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Contact from './components/Contact'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a192f;
  color: #e6f1ff;
  overflow-x: hidden;
`

const MainContent = styled.main`
  padding-top: 80px;
`

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <AppContainer>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <MainContent>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
      </MainContent>
    </AppContainer>
  )
}

export default App
