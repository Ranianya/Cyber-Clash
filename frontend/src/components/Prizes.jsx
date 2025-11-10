import React from 'react';

const Prizes = () => {
  const prizes = [
    {
      team: 'Red Team Champion',
      icon: 'fas fa-bullseye',
      color: 'red',
      amount: '50 000 DA',
      features: [
        'Advanced Penetration Testing Tools',
        'Featured on Security Platforms',
        'Industry Recognition Certificate'
      ]
    },
    {
      team: 'Blue Team Champion',
      icon: 'fas fa-shield-alt',
      color: 'blue', 
      amount: '50 000 DA',
      features: [
        'Professional Security Monitoring Tools',
        'Featured on Defense Platforms',
        'Industry Recognition Certificate'
      ]
    },
   
  ];

  return (
    <section id="prizes">
      <div className="container">
        <h2>PRIZES & RECOGNITION</h2>
        
        <div className="prizes-container">
          {prizes.map((prize, index) => (
            <div key={index} className={`prize-card ${prize.color}-team`}>
              <div className="prize-icon">
                <i className={prize.icon}></i>
              </div>
              <h3>{prize.team}</h3>
              <div className="prize-amount">{prize.amount}</div>
              <div className="prize-features">
                {prize.features.map((feature, idx) => (
                  <p key={idx}>
                    <i className="fas fa-check"></i> {feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;