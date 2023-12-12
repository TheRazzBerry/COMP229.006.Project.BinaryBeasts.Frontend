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
        <h3>Tournament Name: Basketball Premier League (BPL)</h3>
        <p>Description: This tournament features the best players in the league...</p>
        <p>1) Mitchel Marsh</p>
        <p>2)Smith</p>
        <p>3) Josh Root</p>
        {/* Other tournament details */}
      </div>

      <div className="tournament-matches">
        <h3>Matches</h3>
        <div className="match-card" style={matchCardStyle}>
          <p>Match 1: Josh Root vs. Rashid</p>
          {/* Display match details */}
        </div>
        <div className="match-card" style={matchCardStyle}>
          <p>Match 2: Smith vs. Mitchel Marsh</p>
          {/* Display match details */}
        </div>
        {/* Other matches */}
      </div>

      <div className="tournament-results" style={resultCardStyle}>
        <h3>Tournament Results</h3>
        <div className="result-card">
          <p>Winner: Smith</p>
          {/* Display result details */}
        </div>
        {/* Other result cards */}
      </div>
      <footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-section" >
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p> Phone: (555) 123-4567</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 Binary Beats. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default TournamentPage;
