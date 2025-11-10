import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Schedule from './components/Schedule.jsx';
import Prizes from './components/Prizes.jsx';
import Registration from './components/Registration.jsx';
import Footer from './components/Footer.jsx';
import CyberClashScoring from './components/CyberClashScoring.jsx'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <Hero />
      <About />
      <HowItWorks />
      <Schedule />
      <CyberClashScoring />
      <Prizes />
      <Registration />
      <Footer />
      
    </div>
  );
}

export default App;