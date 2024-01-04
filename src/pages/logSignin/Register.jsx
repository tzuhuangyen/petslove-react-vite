// Register.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const history = useHistory();

  const handleRegister = async () => {
    try {
      // 發送 POST 請求到 JSON Server API
      await axios.post("http://localhost:3001/users", { email, password });

      // 註冊成功，跳轉到登入頁面
      alert("註冊成功！");
    } catch (error) {
      console.error("註冊失敗：", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      <p>
        已經有帳號了？請<Link to="/login">登入</Link>
      </p>
    </div>
  );
};

export default Register;
