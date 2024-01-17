import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../components/Context";

const Greeting = () => {
  const { username } = useContext(UserContext);
  return <>Hello{username} welcome</>;
};

function Login() {
  const baseURL = "http://localhost:3000/users";
  const { username, setUsername } = useContext(UserContext);
  // const [password, setPassword] = useState("UserContext");
  return (
    <div>
      <div className="form-container">
        <div className="login-form">
          <form id="form">
            <h1 className="text-center">Log in</h1>

            <label>Email:</label>
            <input
              type="email"
              placeholder="Email@gmail.com"
              pattern=". +@domain\.com"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {username}
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              pattern="[a-zA-Z0-9!@#$%^&*]{8,}"
              title="Enter minimum of 8 characters containing at least one special character such as !@#$%^&*."
              required
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              value="Log in"
              className="form--submit mt-2 mb-4"
            >
              Log in
            </button>
            <span>no account? create one</span>
            <button className="mb-4">
              <Link className="nav-link" to="/signup">
                SignUp{" "}
              </Link>
            </button>

            <span>Delete your an account?</span>
            <button>
              {" "}
              <Link to="/delete">Delete</Link>
            </button>
          </form>
        </div>
      </div>
      <hr />
      <Greeting />
    </div>
  );
}

export default Login;
