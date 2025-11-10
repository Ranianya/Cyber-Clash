import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container"> {/* AJOUTER CE CONTAINER */}
        <h2>THE BATTLE BEGINS</h2>
        <p>In this unique hackathon, security professionals face off in a high-stakes simulation. Will the attackers breach the defenses, or will the defenders hold the line?</p>
        
        <div className="teams-container">
          <div className="team-card red-team">
            <div className="team-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>RED TEAM</h3>
            <p>The offensive force tasked with finding and exploiting vulnerabilities.</p>
            <ul>
              <li>Penetration Testing</li>
              <li>Vulnerability Exploitation</li>
              <li>Attack Strategy</li>
              <li>Social Engineering</li>
              <li>Network Intrusion</li>
            </ul>
          </div>
          
          <div className="team-card blue-team">
            <div className="team-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>BLUE TEAM</h3>
            <p>The defensive force responsible for protecting systems and detecting threats.</p>
            <ul>
              <li>Threat Detection</li>
              <li>Incident Response</li>
              <li>System Hardening</li>
              <li>Defense Strategy</li>
              <li>Forensic Analysis</li>
            </ul>
          </div>
        </div>
      </div> {/* FERMER LE CONTAINER */}
    </section>
  );
};

export default About;