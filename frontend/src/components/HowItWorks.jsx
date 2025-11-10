import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: 'fas fa-users',
      title: 'Team Formation',
      description: 'Register as a team of 3-5 members and choose your side: Red Team (attackers) or Blue Team (defenders).',
      className: 'step-1'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Preparation Phase',
      description: 'Access the competition environment, review rules, and prepare your tools and strategies.',
      className: 'step-2'
    },
    {
      icon: 'fas fa-gamepad',
      title: 'Live Competition',
      description: 'Engage in the 6-hour battle where Red Teams attack and Blue Teams defend in real-time.',
      className: 'step-3'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Judging & Awards',
      description: 'Points are tallied based on objectives completed, and winners are announced at the awards ceremony.',
      className: 'step-4'
    }
  ];

  return (
    <section id="how-it-works">
      <div className="container">
        <h2>HOW IT WORKS</h2>
        
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className={`timeline-step ${step.className}`}>
              <div className="step-icon">
                <i className={step.icon}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;