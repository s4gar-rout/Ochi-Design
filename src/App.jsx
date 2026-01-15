import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Projects from './components/Projects'
import Card from './components/Card'
import StartProject from './components/StartProject'
import Footer from './components/Footer'
import LocomotiveScroll from "locomotive-scroll";
const App = () => { 

  const scroll = new LocomotiveScroll();
  return (
    <div className="min-h-screen w-full bg-[#F1F1F1]">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
      <Projects />
      <Card />
      <StartProject />
      <Footer />
    </div>
  );
}

export default App