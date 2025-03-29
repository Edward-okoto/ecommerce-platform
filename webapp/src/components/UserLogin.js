import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/login', { username, password }) // Update the API URL as needed.
      .then((response) => alert(response.data))
      .catch((error) => console.error('Login failed:', error));
  };

  return (
    <div>
      <h2>User Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;