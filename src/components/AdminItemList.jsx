import React from "react";
import "./AdminItemList.css";

const AdminItemList = ({ items, onEdit, onDelete }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item">
          <div className="item-info">
            <img src={item.image} alt={item.name} />
            <div className="details">
              <div className="itemName">{item.name}</div>
              <div className="itemPrice">${item.price}</div>
            </div>
          </div>
          <div className="button-group">
            <button className="edit-btn" onClick={() => onEdit(item.item_id)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => onDelete(item.item_id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AdminItemList;
