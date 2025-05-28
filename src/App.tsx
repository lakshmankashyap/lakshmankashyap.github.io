import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        style={{ borderRadius: '50%', marginBottom: '1rem' }}
      />
      <h1>Lakshman Kashyap</h1>
      <p>Full Stack Developer | Open Source Contributor</p>
      <a href="https://github.com/lakshmankashyap" target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
    </div>
  );
}

export default App;
