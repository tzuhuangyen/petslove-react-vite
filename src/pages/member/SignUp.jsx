import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      const baseURL = "http://localhost:3000/users";
      const data = {
        username: username,
        password: password,
      };
      // 发送 POST 请求到 /users endpoint
      const response = await axios.post(baseURL, data);

      console.log("User created:", response.data);
      alert("User registered successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="form-container">
      <h1>Sign up</h1>
      <div className="signup-form">
        <form id="form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="username">Username:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            placeholder="please enter your mail"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            pattern="[a-zA-Z0-9!@#$%^&*]{8,}"
            title="Enter minimum of 8 characters containing at least one special character such as !@#$%^&*."
            required
          />

          <button
            type="submit"
            value="Sign Up"
            className="form--submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
