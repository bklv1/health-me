import React, { useState } from 'react';
import './Dashboard.css';
import avatarImage from '../assets/avatar.jpg';

const Dashboard = ({ username }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleComplete = () => {
    setShowChallenge(false);
    alert('Challenge completed! Good job!');
  };

  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <h2>Welcome, {username}!</h2>
      </div>
      
      <button 
        className="challenge-button"
        onClick={() => setShowChallenge(true)}
      >
        Today's Challenge
      </button>

      {showChallenge && (
        <div className="challenge-popup">
          <div className="challenge-content">
            <h3>Daily Challenge</h3>
            <p>Drink one glass of water today</p>
            <button onClick={handleComplete}>Complete</button>
            <button onClick={() => setShowChallenge(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
