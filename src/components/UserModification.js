import React, { useState } from 'react';

const UserModification = () => {
  const [modifiedUserName, setModifiedUserName] = useState('');

  const modifyUser = () => {
    console.log('User modified:', modifiedUserName);
    setModifiedUserName('');
  };

  return (
    <div>
      <h2>User Modification Form</h2>
      <form>
        <label htmlFor="modifiedUserName">Modified User Name:</label>
        <input
          type="text"
          id="modifiedUserName"
          value={modifiedUserName}
          onChange={(e) => setModifiedUserName(e.target.value)}
        />

        <button type="button" onClick={modifyUser}>
          Modify User
        </button>
      </form>
    </div>
  );
}

export default UserModification;
