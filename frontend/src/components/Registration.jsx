import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    email: '',
    teamType: '',
    teamSize: ''
  });
  const [selectedTeamType, setSelectedTeamType] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTeamTypeSelect = (type) => {
    setSelectedTeamType(type);
    setFormData(prevState => ({
      ...prevState,
      teamType: type
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.teamType) {
      setMessage('Please select a team type (Red or Blue)');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setMessage(result.message || 'Registration successful!');
        // Reset form
        setFormData({
          teamName: '',
          captainName: '',
          email: '',
          teamType: '',
          teamSize: ''
        });
        setSelectedTeamType('');
      } else {
        setMessage(result.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('Network error. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registration" className="registration">
      <div className="container">
        <h2>READY FOR BATTLE?</h2>
        
        {/* Message display */}
        {message && (
          <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
        
        <div className="registration-form">
          <form onSubmit={handleSubmit}>
            {/* ... your existing form fields ... */}
            
            <div className="form-group">
              <label htmlFor="team-name">Team Name</label>
              <input 
                type="text" 
                id="team-name" 
                name="teamName"
                className="form-control" 
                value={formData.teamName}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="captain-name">Team Captain Name</label>
              <input 
                type="text" 
                id="captain-name" 
                name="captainName"
                className="form-control" 
                value={formData.captainName}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="form-control" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Select Your Team Type</label>
              <div className="team-type">
                <div 
                  className={`team-type-option red ${selectedTeamType === 'red' ? 'selected' : ''}`}
                  onClick={() => handleTeamTypeSelect('red')}
                >
                  <i className="fas fa-bullseye"></i>
                  <h4>Red Team</h4>
                  <p>Attackers</p>
                </div>
                <div 
                  className={`team-type-option blue ${selectedTeamType === 'blue' ? 'selected' : ''}`}
                  onClick={() => handleTeamTypeSelect('blue')}
                >
                  <i className="fas fa-shield-alt"></i>
                  <h4>Blue Team</h4>
                  <p>Defenders</p>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="team-size">Number of Team Members (3-5)</label>
              <select 
                id="team-size" 
                name="teamSize"
                className="form-control" 
                value={formData.teamSize}
                onChange={handleInputChange}
                required
              >
                <option value="">Select team size</option>
                <option value="3">3 Members</option>
                <option value="4">4 Members</option>
                <option value="5">5 Members</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{width: '100%'}}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;