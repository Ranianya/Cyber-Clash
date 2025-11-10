import React from 'react';

const Hero = () => {
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
    <section className="hero">
      {[...Array(10)].map((_, i) => (
        <div 
          key={i}
          className="binary-animation" 
          style={{
            left: `${5 + i * 10}%`,
            animationDelay: `${i * 2}s`
          }}
        >
          {i % 2 === 0 ? '10101010' : '11001100'}
        </div>
      ))}
      
      <div className="container">
        <div className="hero-content">
          <h1>CYBER CLASH: RED VS BLUE</h1>
          <p>The Ultimate Cybersecurity Hackathon</p>
          <p>Join the battle where offensive Red Teams and defensive Blue Teams face off in a high-stakes simulation of real-world cybersecurity challenges.</p>
          <div className="hero-btns">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('registration')}
            >
              Register Now
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;