import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Signup.css"; // Import the CSS file

export default function Signup() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name: formData.name, email: formData.email };
    loginUser(newUser);
    navigate("/");
  };

  return (
    <div className="signup-container">
      {/* Left Branding Section */}
      <div className="left-side">
        <h1 className="brand-title">QuickRents</h1>
      </div>

      {/* Right Signup Form */}
      <div className="right-side">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Create Account</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
