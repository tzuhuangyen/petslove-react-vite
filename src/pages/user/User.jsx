import React, { useState } from "react";
import { UserContext } from "../../components/Context";

function User({ children }) {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div>
        {children}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default User;
