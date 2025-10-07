/*import React from "react";

export default function ItemCard({ item }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      width: "250px"
    }}>
      {item.image && <img src={`http://localhost:5000${item.image}`} alt={item.name} style={{ width: "100%" }} />}
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ₹{item.price}</p>
      <p>Location: {item.location}</p>
      <p>Years of Use: {item.yearsOfUse}</p>
    </div>
  );
}
*/
/*import { useNavigate } from 'react-router-dom';

function ItemCard({ item }) {
  const navigate = useNavigate();

  return (
    <div 
      className="card" 
      onClick={() => navigate(`/product/${item._id}`)}
      style={{ cursor: 'pointer', border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "250px" }}
    >
     {item.image && <img src={`http://localhost:5000${item.image}`} alt={item.name} style={{ width: "100%" }} />}
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ₹{item.price}</p>
      <p>Location: {item.location}</p>
      <p>Years of Use: {item.yearsOfUse}</p>
</div>
  );
}

export default ItemCard;
*/
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ItemCard({ item }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card"
      style={{
        border: "3px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "240px",
        borderRadius: "15px",
        boxShadow: hover
          ? "0px 12px 25px rgba(0, 0, 0, 0.25)"
          : "0px 4px 10px rgba(0, 0, 0, 0.15)",
        transform: hover
          ? "translateY(-8px) scale(1.05)"
          : "translateY(0) scale(1)",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "#fff",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {item.image && (
        <img
          src={`https://quickrent-4.onrender.com/${item.image}`}
          alt={item.name}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
            transition: "transform 0.3s ease-in-out",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        />
      )}
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ₹{item.price} /Month</p>
      <p>Location: {item.location}</p>
      <p>Years of Use: {item.yearsOfUse}</p>
      <br />
      <br />
      <button
        onClick={() => navigate(`/product/${item._id}`)}
        style={{
          background:
            "linear-gradient(135deg,rgb(106, 80, 255),rgb(0, 76, 255))",
          color: "white",
          padding: "10px 20px",
          border: "none",
          width: "240px",
          borderRadius: "30px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        }}
        onMouseOver={(e) => {
          e.target.style.background =
            "linear-gradient(135deg,rgb(71, 151, 255),rgb(0, 38, 255))";
          e.target.style.transform = "translateY(-2px) scale(1.05)";
          e.target.style.boxShadow =
            "0px 6px 14px rgba(0, 0, 0, 0.25)";
        }}
        onMouseOut={(e) => {
          e.target.style.background =
            "linear-gradient(135deg,rgb(80, 118, 255),rgb(47, 0, 255))";
          e.target.style.transform = "translateY(0) scale(1)";
          e.target.style.boxShadow =
            "0px 4px 10px rgba(0, 0, 0, 0.15)";
        }}
      >
        View More
      </button>
    </div>
  );
}

export default ItemCard;
