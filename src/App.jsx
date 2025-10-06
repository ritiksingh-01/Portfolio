import { useState } from 'react'
import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import AboutSection from './Components/About/AboutSection'
import Achievements from './Components/About/Achievemente'
import FeaturedProjects from './Components/Projects/FeaturedProjects'
import TechnicalSkills from './Components/Skills/TechnicalSkills'
import ContactForm from './Components/Contact/ContactForm'
import Footer from './Layout/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <TechnicalSkills/>
      <Achievements/>
      <FeaturedProjects/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
