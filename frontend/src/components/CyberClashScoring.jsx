import React from 'react';
import './CyberClashScoring.css';

const CyberClashScoring = () => {
  return (
    <section id="scoring">
      <div className="container">
        <h2>Cyber Clash: Winner Selection</h2>
        <p className="subtitle">How champions are crowned in the Red vs Blue battle</p>
        
        <div className="scoring-grid">
          {/* Red Team Scoring */}
          <div className="scoring-card red-team">
            <div className="scoring-header">
              <h3>🔴 Red Team Victory</h3>
              <span className="scoring-type">Offensive Scoring</span>
            </div>
            <div className="scoring-content">
              <h4>Primary Objectives:</h4>
              <div className="objective">
                <span className="objective-icon">🎯</span>
                <div className="objective-text">
                  <strong>Flag Capture</strong>
                  <p>Initial access, privilege escalation, data exfiltration</p>
                </div>
              </div>
              <div className="objective">
                <span className="objective-icon">📊</span>
                <div className="objective-text">
                  <strong>Point Values</strong>
                  <p>Higher points for critical objectives</p>
                </div>
              </div>

              <h4>Bonus Points:</h4>
              <div className="bonus-container">
                <span className="bonus-item">🥷 Stealth</span>
                <span className="bonus-item">💡 Creativity</span>
                <span className="bonus-item">🔄 Multiple Vectors</span>
              </div>

              <h4>Penalties:</h4>
              <div className="penalty-item">⚠️ Service Disruption</div>
            </div>
          </div>

          {/* Blue Team Scoring */}
          <div className="scoring-card blue-team">
            <div className="scoring-header">
              <h3>🔵 Blue Team Victory</h3>
              <span className="scoring-type">Defensive Scoring</span>
            </div>
            <div className="scoring-content">
              <h4>Primary Objectives:</h4>
              <div className="objective">
                <span className="objective-icon">🛡️</span>
                <div className="objective-text">
                  <strong>Service Uptime</strong>
                  <p>Maintain system availability</p>
                </div>
              </div>
              <div className="objective">
                <span className="objective-icon">🚩</span>
                <div className="objective-text">
                  <strong>Flag Protection</strong>
                  <p>Prevent data compromise</p>
                </div>
              </div>
              <div className="objective">
                <span className="objective-icon">📝</span>
                <div className="objective-text">
                  <strong>Incident Reporting</strong>
                  <p>Accurate detection with evidence</p>
                </div>
              </div>

              <h4>Bonus Points:</h4>
              <div className="bonus-container">
                <span className="bonus-item">👁️ Early Detection</span>
                <span className="bonus-item">🔧 Proactive Hardening</span>
              </div>

              <h4>Penalties:</h4>
              <div className="penalty-item">📢 False Positives</div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <div className="info-card">
            <div className="info-icon">⚪</div>
            <div className="info-content">
              <h4>White Team Judges</h4>
              <p>Neutral organizers validate flags, score reports, and ensure fair play</p>
            </div>
          </div>
          
          <div className="awards-card">
            <h4>🏅 Awards Categories</h4>
            <div className="awards-list">
              <div className="award">
                <strong>Best Red Team</strong>
                <span>Most effective offensive campaign</span>
              </div>
              <div className="award">
                <strong>Best Blue Team</strong>
                <span>Superior defense & detection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberClashScoring;