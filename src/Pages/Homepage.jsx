import React from 'react'
import Hero from '../Components/Navbar/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'

function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Homepage
