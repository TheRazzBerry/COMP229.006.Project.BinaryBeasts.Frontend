  // Tournament.js
  import React, { useState, useEffect } from 'react';
  import './Tournament.css'; // Import your custom styles
  import 'index.css'; // Import your custom styles
  const Tournament = () => {
    const [tournamentData, setTournamentData] = useState([]);
  
    useEffect(() => {
      const fetchTournamentData = async () => {
        try {
          const response = await fetch('https://api.example.com/tournament');
          const data = await response.json();
          setTournamentData(data);
        } catch (error) {
          console.error('Error fetching tournament data:', error);
        }
      };
  
      fetchTournamentData();
    }, []);
  
    return (
      <div className="tournament-container">
        <header>
          <h1>Welcome to Our Tournament</h1>
          <p>Stay updated with the latest events</p>
        </header>
  
        <div className="tournament-details">
          {tournamentData.map((tournament, index) => (
            <div key={index} className="tournament-card">
              <h2>{tournament.name}</h2>
              <p className="date-location">
                <span>Date: {tournament.date}</span>
                <span>Location: {tournament.location}</span>
              </p>
              <p>{tournament.description}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Tournament;
  