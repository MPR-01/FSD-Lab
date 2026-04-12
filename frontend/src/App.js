import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempErrors = {};
    setSubmitted(false);

    // Requirement: Highlight empty blocks
    if (!formData.name) tempErrors.name = "Name is required";
    
    // Requirement: Error message for wrong email format
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Invalid email format (e.g., user@example.com)";
    }

    setErrors(tempErrors);

    // If no errors, call the API
    if (Object.keys(tempErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '' }); // Clear form
        }
      } catch (err) {
        console.error("API Error:", err);
      }
    }
  };

  return (
    <div className="container">
      <h2>User Registration</h2>
      {submitted && <div className="success-msg">🎉 Success! Data sent to server.</div>}
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text"
            className={errors.name ? "error-border" : ""}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email"
            className={errors.email ? "error-border" : ""}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;