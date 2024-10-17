import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate form data (example: check if passwords match)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("User registered successfully");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="login-container bg-black">
      <div className="login-card justify-content-around">
        <div className="card-body">
          <h3 className="card-title text-center fs-2fw-bolder mb-4">
            Register
          </h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="E-mail"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Phone"
                className="form-control"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              className="btn btn-link register-account text-secondary hover:font-bold"
              onClick={() => navigate("/login")}
            >
              Already have an account?
            </button>
            <button type="submit" className="btn btn-black-body mt-2 w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
