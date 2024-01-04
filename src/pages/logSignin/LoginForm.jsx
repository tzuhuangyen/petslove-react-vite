// Login.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

axios.get("http://localhost:3001/posts").then(function (response) {
  console.log(response);
});
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // 發送 GET 請求到 JSON Server API
      const response = await axios.get(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      const user = response.data[0];

      if (user) {
        alert("登入成功！");
        // 在這裡可以處理登入後的跳轉或其他操作
      } else {
        alert("登入失敗，請檢查Email和密碼是否正確。");
      }
    } catch (error) {
      console.error("登入失敗：", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        還沒有帳號？請<Link to="/register">註冊</Link>
      </p>
    </div>
  );
};

export default Login;
