import React, { useState, useEffect } from "react";
import "../styles/ForYouList.css";
import axios from "axios";
import { API_URL } from "../config";

const ForYouList = ({ item }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${API_URL}/items/`);
        const items = response.data.slice(0, 5);
        setItems(items);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <h2>Just For You</h2>
      <div className="for-you-container">
        {items.map((item) => (
          <div className="for-you-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForYouList;
