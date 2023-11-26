import React from 'react';

const ViewTournaments = () => {
  const viewTournaments = () => {
    // Implement logic to view tournaments
    console.log('Viewing tournaments...');
  };

  return (
    <div>
      <h2>View Tournaments</h2>
      <button type="button" onClick={viewTournaments}>
        View Tournaments
      </button>
    </div>
  );
}

export default ViewTournaments;
