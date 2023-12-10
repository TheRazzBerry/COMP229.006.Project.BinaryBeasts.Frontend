// Tournament.js

import React, { useState, useEffect } from 'react';

const Tournament = () => {
  // State to store tournament data
  const [tournamentData, setTournamentData] = useState([]);

  // useEffect to fetch tournament data when the component mounts
  useEffect(() => {
    const fetchTournamentData = async () => {
      try {
        // Make an API call or fetch data from your backend
        // Replace the URL with your actual API endpoint
        const response = await fetch('https://api.example.com/tournament');
        const data = await response.json();

        // Update the state with the fetched tournament data
        setTournamentData(data);
      } catch (error) {
        console.error('Error fetching tournament data:', error);
      }
    };

    // Call the fetchTournamentData function
    fetchTournamentData();
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="tournament-container">
      <h1>Tournament Website</h1>
      <div className="tournament-details">
        {/* Display tournament information */}
        {tournamentData.map((tournament, index) => (
          <div key={index} className="tournament-card">
            <h2>{tournament.name}</h2>
            <p>{tournament.date}</p>
            <p>{tournament.location}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournament;
