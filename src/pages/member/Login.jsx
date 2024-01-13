import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const baseURL = "http://localhost:3000/users";

  return (
    <div>
      <h1>Log in</h1>
      <div className="form-container">
        <div className="login-form">
          <form id="form">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email@gmail.com"
              pattern=".+@domain\.com"
              required
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              pattern="[a-zA-Z0-9!@#$%^&*]{8,}"
              title="Enter minimum of 8 characters containing at least one special character such as !@#$%^&*."
              required
            />

            <input type="submit" value="Log in" className="form--submit" />

            <p>no account? create one</p>
            <Link className="nav-link" to="/signup">
              SignUp{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
