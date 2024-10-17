import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await apiClient.post("/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        localStorage.setItem("token", response.data.token);
        setEmail("");  // Clear email field
        setPassword(""); // Clear password field after successful login
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid email or password");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="login-container bg-black">
      <div className="login-card justify-content-around">
        <div className="card-body">
          <p className="card-title text-center fs-2 fw-bolder">Login</p>
          <p className="card-title text-center mb-4 fw-normal">
            Let's get started!
          </p>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-1">
                <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Entter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              className="btn btn-link register-account text-secondary hover:font-bold"
              onClick={() => navigate("/register")}
            >
              Register now..
            </button>
            <button type="submit" className="btn btn-black-body mt-3 w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
