// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage'; // Import your DashboardPage component

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<LoginPage />} /> {/* Render LoginPage component at the root URL */}
        <Route path="/dashboard" element={<DashboardPage />} /> {/* Render DashboardPage component at the '/dashboard' URL */}
        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;



