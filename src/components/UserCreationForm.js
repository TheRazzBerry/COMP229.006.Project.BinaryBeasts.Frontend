import React, { useState } from 'react';

const UserCreationForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    console.log('User created:', {
      userName,
      email,
      password,
    });

    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>User Creation Form</h2>
      <form>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={createUser}>
          Create User
        </button>
      </form>
    </div>
  );
}

export default UserCreationForm;
