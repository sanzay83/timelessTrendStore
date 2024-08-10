// src/AdminRegistration.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/AdminRegistration.css";
import { API_URL } from "../config";

const AdminRegistration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/user/`, {
        username,
        password,
      });
      setMessage("Admin user created successfully!");
      setUsername("");
      setPassword("");
    } catch (error) {
      setMessage("Failed to create admin user. Please try again.");
    }
  };

  return (
    <div className="adminReg">
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminRegistration;
