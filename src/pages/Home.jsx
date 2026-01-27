import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import CertificationSlider from '../components/CertificationSlider'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About />
      <Skills/>
      <CertificationSlider/>
      <Projects/>
      <Contact />
    </div>
  )
}

export default Home