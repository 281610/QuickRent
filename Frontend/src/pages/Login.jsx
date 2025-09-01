/*
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake login logic
    const user = { name: "QuickRent User", email: formData.email };
    loginUser(user);
    navigate("/");
  };

  return (
    <div className="login-container">
  
      <div className="left-side">
        <h1 className="brand-title">QuickRents</h1>
      </div>

  
      <div className="right-side">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}


*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear previous error

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // Save user + token
      localStorage.setItem("token", data.token);
      loginUser(data.user); // update context
      navigate("/");
    } catch (error) {
      setError("Server error, please try again later");
    }
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <h1 className="brand-title">QuickRents</h1>
      </div>

      <div className="right-side">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
