// src/components/TournamentCreationForm.js
import React, { useState } from 'react';

const TournamentCreationForm = () => {
  const [tournamentName, setTournamentName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const createTournament = () => {
    console.log('Tournament created:', {
      tournamentName,
      startDate,
      endDate,
    });

    setTournamentName('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div>
      <h2>Tournament Creation Form</h2>
      <form>
        <label htmlFor="tournamentName">Tournament Name:</label>
        <input
          type="text"
          id="tournamentName"
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
        />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button type="button" onClick={createTournament}>
          Create Tournament
        </button>
      </form>
    </div>
  );
}

export default TournamentCreationForm;
