import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import More from "./components/More";
import Product from "./components/Product";
import ScrollToTop from "./components/ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FurnitureProduct from "./components/ProductDetails";

function App() {
  const location = useLocation(); // Get current route

  // Define the paths where you don't want the NavBar and Footer
  const noNavFooterPaths = ["/login", "/register"];

  return (
    <>
      <ScrollToTop />
      {/* Conditionally render NavBar and Footer */}
      {!noNavFooterPaths.includes(location.pathname) && <NavBar />}
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/more" element={<More />} />
          <Route path="/product" element={<Product />} />
          <Route path="/details" element={<FurnitureProduct />} />
        </Routes>
      </div>
      
      {!noNavFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
