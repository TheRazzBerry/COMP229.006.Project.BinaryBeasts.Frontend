import React, { useState } from 'react';

const UserCreationForm = () => {
  const [userName, setUserName] = useState('');
  const [contact, setUserContact] = useState('');
  const [adress, setUserAdress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    console.log('User created:', {
      userName,
      contact,
      adress,
      email,
      password,
    });

    setUserName('');
    setUserContact('');
    setUserAdress('');
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

        <label htmlFor="contact">User Contact:</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setUserContact(e.target.value)}
        />
        <label htmlFor="adress">User Adress:</label>
        <input
          type="text"
          id="adress"
          value={adress}
          onChange={(e) => setUserAdress(e.target.value)}
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
