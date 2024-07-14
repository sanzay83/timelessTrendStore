// src/components/Collection.js
import React from "react";
import CollectionItem from "./CollectionItem";
import "./Collection.css";

const items = [
  {
    id: 1,
    image: "path_to_image_1",
    name: "Item 1",
    price: 50,
    description: "A beautiful item perfect for any occasion.",
  },
  {
    id: 2,
    image: "path_to_image_2",
    name: "Item 2",
    price: 75,
    description: "A stylish item that complements your wardrobe.",
  },
  {
    id: 3,
    image: "path_to_image_3",
    name: "Item 3",
    price: 100,
    description: "An elegant item for a sophisticated look.",
  },
];

const Collection = () => {
  return (
    <section className="collection">
      <h2>Shop Our Collection</h2>
      <div className="collection-grid">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
