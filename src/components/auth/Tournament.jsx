import React from 'react';

const TournamentPage = () => {
  const pageStyle = {
    backgroundColor: 'lightgray',
    padding: '20px',
  };

  const infoStyle = {
    marginBottom: '20px',
    border: '1px solid #ccc',
    padding: '10px', };

  const matchCardStyle = {
    marginBottom: '10px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  };

  const resultCardStyle = {
    marginTop: '20px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  };

  return (
    <div style={pageStyle}>
      <h2>Tournament Details</h2>
      <div className="tournament-info" style={infoStyle}>
        <h3>Tournament Name: Example Tournament</h3>
        <p>Description: This tournament features the best players in the league...</p>
        {/* Other tournament details */}
      </div>

      <div className="tournament-matches">
        <h3>Matches</h3>
        <div className="match-card" style={matchCardStyle}>
          <p>Match 1: Player 1 vs. Player 2</p>
          {/* Display match details */}
        </div>
        <div className="match-card" style={matchCardStyle}>
          <p>Match 2: Player 3 vs. Player 4</p>
          {/* Display match details */}
        </div>
        {/* Other matches */}
      </div>

      <div className="tournament-results" style={resultCardStyle}>
        <h3>Tournament Results</h3>
        <div className="result-card">
          <p>Winner: Player X</p>
          {/* Display result details */}
        </div>
        {/* Other result cards */}
      </div>
    </div>
  );
};

export default TournamentPage;
