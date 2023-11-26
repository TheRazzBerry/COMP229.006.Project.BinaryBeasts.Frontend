import React, { useState } from 'react';

const TournamentModification = () => {
  const [modifiedTournamentName, setModifiedTournamentName] = useState('');

  const modifyTournament = () => {
    console.log('Tournament modified:', modifiedTournamentName);
    setModifiedTournamentName('');
  };

  return (
    <div>
      <h2>Tournament Modification Form</h2>
      <form>
        <label htmlFor="modifiedTournamentName">Modified Tournament Name:</label>
        <input
          type="text"
          id="modifiedTournamentName"
          value={modifiedTournamentName}
          onChange={(e) => setModifiedTournamentName(e.target.value)}
        />

        <button type="button" onClick={modifyTournament}>
          Modify Tournament
        </button>
      </form>
    </div>
  );
}

export default TournamentModification;
