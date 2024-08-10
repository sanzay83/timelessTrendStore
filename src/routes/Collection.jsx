import React, { useState, useEffect } from "react";
import axios from "axios";
import CollectionItem from "../components/CollectionItem";
import "../styles/Collection.css";
import { API_URL } from "../config";

const Collection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${API_URL}/items/`);
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="collection">
      <h2>Shop Our Collection</h2>
      <div className="collection-grid">
        {items.map((item) => (
          <CollectionItem key={item.item_id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
