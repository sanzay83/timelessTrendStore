import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminItemList from "./AdminItemList";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AdminItemList.css";
import { API_URL } from "../config";

const AdminDashboard = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/items/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      navigate("/admin");
    }
  };

  useEffect(() => {
    fetchItems();
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleEdit = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`${API_URL}/items/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchItems();
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`${API_URL}/items/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchItems();
  };

  return (
    <div className="container">
      <div className="itemHead">
        <div>
          <h1>ITEMS LIST</h1>
        </div>
        <div>
          <Link className="addItem" to="/additem">
            Add Item
          </Link>
        </div>
      </div>

      <AdminItemList
        items={items}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdminDashboard;
