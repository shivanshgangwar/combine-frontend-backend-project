// 


import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Backend API ko call kar rahe hain
    fetch('http://localhost:5000/api/data')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React & Backend Connection</h1>
      <p>Backend Message: <strong>{message || "Loading..."}</strong></p>
    </div>
  );
}

export default App;