import React from 'react'
import './App.css'
import Navber from './components/Navber'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import EduTrain from './components/EduTrain'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className=' bg-background'>
      <Navber/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <EduTrain/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
