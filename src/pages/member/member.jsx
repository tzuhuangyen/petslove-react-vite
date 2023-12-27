import axios from "axios";

import React from "react";

const Login = (props) => {
  axios.get("http://localhost:3000/post").then((res) => {
    console.log(res);
  });
  return <div>Login</div>;
};

export default Login;
