// Login.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 發送 GET 請求到 JSON Server API
      const response = await axios.get("http://localhost:3000/users", {
        email,
        password,
      });
      console.log(response.data);

      alert("登入成功！");
      // 在這裡可以處理登入後的跳轉或其他操作
    } catch (error) {
      console.error("登入失敗：", error);
      alert("登入失敗，請檢查Email和密碼是否正確。");
    }
  };

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
      <p style={{ color: "red" }}>
        create an account?<Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
