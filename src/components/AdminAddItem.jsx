// src/components/AdminLogin.js
import React, { useState } from "react";
import "../styles/AdminLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const AdminAddItem = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleAddItem = async (e) => {
    e.preventDefault();
    // For demonstration purposes, we'll use hardcoded credentials
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/items/`,
        {
          image,
          name,
          price,
          description,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("Item Added successfully");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Item adding failed.");
    }
  };

  return (
    <div className="admin-login">
      <h2>Add Item</h2>
      <form onSubmit={handleAddItem}>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminAddItem;
