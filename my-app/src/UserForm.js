import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Name: name }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('User added:', data);
        setName(''); // Clear form after submission
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
