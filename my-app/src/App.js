import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleFetchUsers = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    setSelectedUser(null); // Clear selection after fetching
    // Update user list state (if needed)
  };

  const handleUpdateUser = () => {
    // Implement logic to update user based on selectedUser state
    // Use PUT request to `/api/user/:Name` endpoint
  };

  const handleDeleteUser = async () => {
    if (selectedUser) {
      const response = await fetch(`/api/user/${selectedUser.Name}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSelectedUser(null); // Clear selection after deletion
        // Update user list state (if needed)
      } else {
        console.error('Error deleting user');
      }
    }
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <button onClick={handleFetchUsers}>Display Users</button>
      <UserList />
      <UserForm />
      <button disabled={selectedUser} onClick={handleUpdateUser}>Update User</button>
      <button disabled={!selectedUser} onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default App;
