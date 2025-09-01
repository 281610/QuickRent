import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage"; // 👈 New page for item details
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductPage />} /> {/* 👈 New route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       {} <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
