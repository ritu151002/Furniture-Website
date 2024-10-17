import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  
  const handleProductsClick = () => {
    navigate("/product");
  };
  
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="fs2.jpg"
              alt="Furniture Store"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-4">About Our Furniture Store</h1>
            <p className="lead text-black">
              Welcome to our premium furniture store, where{" "}
              <strong>elegance</strong> meets <strong>comfort</strong>. We are
              committed to offering high-quality furniture that blends
              craftsmanship with contemporary design to suit any space.
            </p>
            <p className="lead text-black">
              Our mission is to provide you with a collection of unique,
              stylish, and functional furniture pieces that make your space
              warm, cozy, and inviting.
            </p>
            <button className="btn btn-black btn-lg mt-1" onClick={handleProductsClick}>
              Explore Our Collection
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col text-center">
            <h2 style={{ color: "black" }}>Why Choose Us?</h2>
            <p className="lead text-black">
              With years of experience and a passion for quality, we pride
              ourselves on creating lasting relationships with our customers.
              Our team of experts ensures that you receive the best service and
              high-quality furniture.
            </p>
          </div>
        </div>

        <div className="row text-center mt-4">
          <div className="col-md-4">
            <i className="bi bi-truck display-4 text-black mb-3"></i>
            <h5 className="text-black">Free Delivery</h5>
            <p className="text-black">
              Get free delivery on all purchases above $500.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-arrow-repeat display-4 text-black mb-3"></i>
            <h5 className="text-black">Easy Returns</h5>
            <p className="text-black">
              Hassle-free returns on any damaged items.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-emoji-heart-eyes display-4 text-black mb-3"></i>
            <h5 className="text-black">Customer Satisfaction</h5>
            <p className="text-black">Your happiness is our top priority.</p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white text-center py-5 mt-2">
        <div className="container">
          <h2>Discover Timeless Furniture That Complements Your Style</h2>
          <button className="btn btn-outline-light btn-lg mt-3" onClick={handleProductsClick}>
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
