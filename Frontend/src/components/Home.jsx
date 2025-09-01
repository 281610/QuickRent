import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";
/*
export default function Home() {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
    price: "",
    description: "",
    location: "",
    yearsOfUse: "",
    image: null
  });

  // Fetch items from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    const res = await fetch("http://localhost:5000/api/items", {
      method: "POST",
      body: data
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
    setShowForm(false);
  };

  return (
    <div style={{ padding: "20px" }}>
        <h1>Rent your Unused Items &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setShowForm(!showForm)}   style={{
    background: "linear-gradient(135deg, #ff7f50, #ff4500)",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
  }}
  onMouseOver={(e) => {
    e.target.style.background = "linear-gradient(135deg, #ff6347, #ff2e00)";
    e.target.style.transform = "translateY(-2px) scale(1.05)";
    e.target.style.boxShadow = "0px 6px 14px rgba(0, 0, 0, 0.25)";
  }}
  onMouseOut={(e) => {
    e.target.style.background = "linear-gradient(135deg, #ff7f50, #ff4500)";
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.15)";
  }}
   >Rent Item</button>
</h1>
      
      {showForm && (
  <div 
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(5px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      animation: "fadeIn 0.3s ease-in-out"
    }}
  >
    <div 
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        width: "400px",
        position: "relative",
        animation: "slideDown 0.4s ease-out"
      }}
    >
      {/* Close Button 
      <button 
        onClick={() => setShowForm(false)} 
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        ✖
      </button>

      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          required 
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />
        <input 
          placeholder="Price" 
          type="number" 
          onChange={(e) => setFormData({...formData, price: e.target.value})} 
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />
        <textarea 
          placeholder="Description" 
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            resize: "none"
          }}
        ></textarea>
        <input 
          placeholder="Location" 
          onChange={(e) => setFormData({...formData, location: e.target.value})} 
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />
        <input 
          placeholder="Years of Use" 
          type="number" 
          onChange={(e) => setFormData({...formData, yearsOfUse: e.target.value})} 
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
          style={{
            width: "100%",
            marginBottom: "10px"
          }}
        />
        <button 
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}

      <br /><br />
      <hr />
        <h1>Items for Rent</h1>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {items.map(item => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
*/
export default function Home() {
    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      name: "",
      price: "",
      description: "",
      location: "",
      yearsOfUse: "",
      image: null
    });
  
    useEffect(() => {
      fetch("http://localhost:5000/api/items")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
  
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        body: data
      });
      const newItem = await res.json();
      setItems([...items, newItem]);
      setShowForm(false);
    };
  
    return (
      <div 
        style={{
          padding: "20px",
          opacity: 0,
          transform: "translateY(20px)",
          animation: "fadeSlideIn 0.8s ease-out forwards"
        }}
      >
        {/* Inject keyframes inline */}
        <style>{`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>
  
      
        <h1 style={{marginLeft:"600px", fontSize:"40px",fontFamily:"sans-serif",fontWeight:"bold"}}>Items for Rent</h1>

        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
          {items.map(item => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    );
  }
  