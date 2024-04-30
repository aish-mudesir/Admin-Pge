// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css';

const userData = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = () => {
    const user = userData.find(user => user.username === username);
    if (user) {
      if (user.password === password) {
        // Login successful, navigate to DashboardPage
        navigate('/dashboard'); // Use navigate function to navigate to another route
      } else {
        setError('Incorrect password');
      }
    } else {
      setError('User not found');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
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
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;

