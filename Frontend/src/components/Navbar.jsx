/*import React from 'react';
import { Search } from 'lucide-react';
import './Navbar.css';
import { useState, useEffect } from "react";

import 'react-router-dom';
import { Link,useNavigate } from 'react-router-dom'
export default function Navbar() {
  
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setShowSearch(true), 100);
  }, []);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem("user"); // Remove invalid data
      }
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  const buttonStyle = {
    display: "inline-block",
    padding: "10px 22px",
    margin: "0 10px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    boxShadow: "0 4px 15px rgba(101, 41, 255, 0.3)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    userSelect: "none",
  };

  const hoverStyle = {
    background: "linear-gradient(135deg, #2575fc, #6a11cb)",
    boxShadow: "0 6px 20px rgba(101, 41, 255, 0.5)",
    transform: "scale(1.05)",
  };

  // State to manage hover effect
  const [loginHover, setLoginHover] = React.useState(false);
  const [signupHover, setSignupHover] = React.useState(false);

  return (
    <nav className="navbar">
      <Link to="/" style={{textDecoration:"none"}}><div className="brand">QuickRents</div>
</Link>
     

<div
  style={{
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: "50px",
    padding: "6px 10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "20px auto",
    transition: "all 0.5s ease-in-out",
    opacity: showSearch ? 1 : 0,
    transform: showSearch ? "translateY(0px)" : "translateY(20px)",
  }}
>
  <input
    type="text"
    placeholder="Search..."
    style={{
      flex: 1,
      border: "none",
      outline: "none",
      padding: "10px 14px",
      borderRadius: "50px",
      fontSize: "16px",
      background: "transparent",
    }}
  />
  <button
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "10px 18px",
      background: "linear-gradient(135deg, #4f46e5, #6366f1)",
      color: "white",
      border: "none",
      borderRadius: "50px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "transform 0.2s ease, background 0.3s ease",
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg, #4338ca, #4f46e5)")
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg, #4f46e5, #6366f1)")
    }
  >
    <Search size={18} style={{ stroke: "white" }} />
    Search
  </button>
</div>
{user ? (
        <>
          <Link to="/Profile">Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
      
    </nav>
  );
}*/
// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect,useState } from "react";
import { Search } from 'lucide-react';

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
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

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setShowSearch(true), 100);
  }, []);
  
  /*const handleLogout = () => {
    logoutUser();
    navigate("/");
    
  };*/
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("user");

    // Simulate a short delay (e.g., API call or cleanup)
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/"; // redirect to homepage
    }, 1000);
  };

  return (
    <nav style={{ padding: "5px", background: "black", display: "flex", alignItems: "center", justifyContent: "space-between",height:"60px" }}>
         <Link to="/" style={{
    fontSize: "40px",
    fontWeight: "bold",
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontStyle: "italic",
    color: "#007BFF",
    textDecoration: "none"
  }}><div className="brand">QuickRents</div>
</Link>
<h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            style={{
              background: "linear-gradient(135deg,rgb(80, 86, 255),rgb(17, 0, 255))",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
              marginLeft:"100px"
            }}
            onMouseOver={(e) => {
              e.target.style.background = "linear-gradient(135deg,rgb(80, 71, 255),rgb(0, 30, 255))";
              e.target.style.transform = "translateY(-2px) scale(1.05)";
              e.target.style.boxShadow = "0px 6px 14px rgba(0, 0, 0, 0.25)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "linear-gradient(135deg,rgb(118, 80, 255),rgb(30, 0, 255))";
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.15)";
            }}
          >
            Give your Product on Rent
          </button>
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
            WebkitBackdropFilter: "blur(5px)", // Safari support
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
                <input placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} required 
                  style={{width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc"}} />
                <input placeholder="Price" type="number" onChange={(e) => setFormData({...formData, price: e.target.value})} required 
                  style={{width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc"}} />
                <textarea placeholder="Description" onChange={(e) => setFormData({...formData, description: e.target.value})} 
                  style={{width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc", resize: "none"}}></textarea>
                <input placeholder="Location" onChange={(e) => setFormData({...formData, location: e.target.value})} required 
                  style={{width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc"}} />
                <input placeholder="Years of Use" type="number" onChange={(e) => setFormData({...formData, yearsOfUse: e.target.value})} required 
                  style={{width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc"}} />
                <input type="file" accept="image/*" onChange={(e) => setFormData({...formData, image: e.target.files[0]})} 
                  style={{width: "100%", marginBottom: "10px"}} />
                <button type="submit" style={{width: "100%", padding: "10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px"}} >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
  
      
  
      <div
  style={{
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: "50px",
    padding: "6px 10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "20px auto",
    transition: "all 0.5s ease-in-out",
    opacity: showSearch ? 1 : 0,
    transform: showSearch ? "translateY(0px)" : "translateY(20px)",
  }}
>
  <input
    type="text"
    placeholder="Search..."
    style={{
      flex: 1,
      border: "none",
      outline: "none",
      padding: "10px 14px",
      borderRadius: "50px",
      fontSize: "16px",
      background: "transparent",
    }}
  />
  <button
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "10px 18px",
      background: "linear-gradient(135deg,rgb(17, 24, 227),rgb(9, 13, 249))",
      color: "white",
      border: "none",
      borderRadius: "50px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "transform 0.2s ease, background 0.3s ease",
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg,rgb(34, 16, 231),rgb(31, 19, 245))")
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg,rgb(31, 20, 237),rgb(13, 17, 237))")
    }
  >
    <Search size={18} style={{ stroke: "white" }} />
    Search
  </button>
</div>


      <div>
        {!user ? (
         <div style={{ display: "flex", gap: "15px" }}>
         <Link to="/login">
           <button
             style={{
               padding: "10px 20px",
               fontSize: "16px",
               fontWeight: "bold",
               borderRadius: "8px",
               border: "none",
               cursor: "pointer",
               color: "white",
               background: "linear-gradient(135deg,rgb(91, 79, 254),rgb(0, 0, 254))",
               transition: "all 0.3s ease-in-out"
             }}
             onMouseOver={(e) => {
               e.target.style.transform = "scale(1.05)";
               e.target.style.boxShadow = "0 4px 12px rgba(88, 79, 254, 0.5)";
             }}
             onMouseOut={(e) => {
               e.target.style.transform = "scale(1)";
               e.target.style.boxShadow = "none";
             }}
           >
             Login
           </button>
         </Link>
       
         <Link to="/signup">
           <button
             style={{
               padding: "10px 20px",
               fontSize: "16px",
               fontWeight: "bold",
               borderRadius: "8px",
               border: "none",
               cursor: "pointer",
               color: "white",
               background: "linear-gradient(135deg,rgb(61, 47, 255),rgb(36, 36, 221))",
               transition: "all 0.3s ease-in-out"
             }}
             onMouseOver={(e) => {
               e.target.style.transform = "scale(1.05)";
               e.target.style.boxShadow = "0 4px 12px rgba(67, 36, 221, 0.5)";
             }}
             onMouseOut={(e) => {
               e.target.style.transform = "scale(1)";
               e.target.style.boxShadow = "none";
             }}
           >
             Signup
           </button>
         </Link>
       </div>
        ) : (
          <>
                   <div style={{ display: "flex", gap: "15px" }}>

            <Link to="/profile"><button   style={{
               padding: "10px 20px",
               fontSize: "16px",
               fontWeight: "bold",
               borderRadius: "8px",
               border: "none",
               cursor: "pointer",
               color: "white",
               background: "linear-gradient(135deg,rgb(61, 47, 255),rgb(36, 36, 221))",
               transition: "all 0.3s ease-in-out"
             }}
             onMouseOver={(e) => {
               e.target.style.transform = "scale(1.05)";
               e.target.style.boxShadow = "0 4px 12px rgba(67, 36, 221, 0.5)";
             }}
             onMouseOut={(e) => {
               e.target.style.transform = "scale(1)";
               e.target.style.boxShadow = "none";
             }}>Profile</button></Link>
            <button onClick={handleLogout}   style={{
               padding: "10px 20px",
               fontSize: "16px",
               fontWeight: "bold",
               borderRadius: "8px",
               border: "none",
               cursor: "pointer",
               color: "white",
               background: "linear-gradient(135deg,rgb(61, 47, 255),rgb(36, 36, 221))",
               transition: "all 0.3s ease-in-out"
             }}
             onMouseOver={(e) => {
               e.target.style.transform = "scale(1.05)";
               e.target.style.boxShadow = "0 4px 12px rgba(67, 36, 221, 0.5)";
             }}
             onMouseOut={(e) => {
               e.target.style.transform = "scale(1)";
               e.target.style.boxShadow = "none";
             }}>Logout</button>
             </div>
          </>
        )}
      </div>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "6px solid rgba(255,255,255,0.3)",
              borderTop: "6px solid white",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>

          <style>
            {`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      )}

    </nav>
  );
}
