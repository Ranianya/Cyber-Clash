import React from 'react';

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo">Cyber Clash</div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
            <li><a onClick={() => scrollToSection('schedule')}>Schedule</a></li>
            <li><a onClick={() => scrollToSection('prizes')}>Prizes</a></li>
            <li><a onClick={() => scrollToSection('registration')}>Register</a></li>
          </ul>
          <div 
            className="mobile-menu" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;