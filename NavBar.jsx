import React, { useState } from "react";
import Account from "./Account";
import { useNavigate } from "react-router-dom";
// Importing Bootstrap JS and Popper.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function NavBar() {
  const navigate = useNavigate();

  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleContactClick = () => {
    navigate("/contactus");
  };

  const handleMoreClick = () => {
    navigate("/more");
  };

  const handleProductsClick = () => {
    navigate("/product");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-3">
          <a className="navbar-brand fs-2 text-white" href="/">
            TestMode
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" // Ensure it matches the collapse id
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span> {/* No need for 'text-white' */}
          </button>

          <div className="collapse navbar-collapse" id="navbarNav"> {/* Matching id */}
            <ul className="navbar-nav ms-auto mb-2 fs-5 mb-lg-0 gap-2">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="/"
                  onClick={() => navigate("/")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleAboutClick}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleProductsClick}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleContactClick}>
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleMoreClick}>
                  More
                </a>
              </li>
            </ul>
            <div className="ms-2">
              <img
                src="AvatarAcc.jpeg"
                alt="User Avatar"
                className="rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
                onClick={toggleOffcanvas}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Account */}
      <Account isOpen={isOffcanvasOpen} toggleOffcanvas={toggleOffcanvas} />
    </>
  );
}

export default NavBar;
