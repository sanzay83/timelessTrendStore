// src/components/CollectionItem.js
import React from "react";
import "./CollectionItem.css";

const CollectionItem = ({ item }) => {
  return (
    <div className="collection-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">${item.price}</p>
    </div>
  );
};

export default CollectionItem;
