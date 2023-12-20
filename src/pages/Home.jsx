import React from "react";
import { Outlet } from "react-router-dom";
// import IndexBanner from "./pages/index/IndexBanner";

function Home() {
  return (
    <>
      <h1>this is Home page</h1>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Home;
