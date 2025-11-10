import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer>
      <div className="container"> {/* AJOUTER CE CONTAINER */}
        <div className="footer-content">
          <div className="footer-column">
            <h3>Cyber Clash</h3>
            <p>The ultimate cybersecurity hackathon where Red Teams and Blue Teams battle for supremacy in a simulated environment.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-discord"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('about')}>About the Event</a></li>
              <li><a onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
              <li><a onClick={() => scrollToSection('schedule')}>Schedule</a></li>
              <li><a onClick={() => scrollToSection('prizes')}>Prizes</a></li>
              <li><a onClick={() => scrollToSection('registration')}>Register</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li><i className="fas fa-envelope"></i> info@cyberclash.com</li>
              <li><i className="fas fa-phone"></i> +213 555555555</li>
              <li><i className="fas fa-map-marker-alt"></i> 123 Tech Street, Cyber City</li>
            </ul>
          </div>
        </div>
        
        <div className="sponsors">
          <div className="sponsor-logo">TechSecure</div>
          <div className="sponsor-logo">CyberShield</div>
          <div className="sponsor-logo">DataDefend</div>
          <div className="sponsor-logo">NetSecure</div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2023 Cyber Clash. All rights reserved.</p>
        </div>
      </div> {/* FERMER LE CONTAINER */}
    </footer>
  );
};

export default Footer;