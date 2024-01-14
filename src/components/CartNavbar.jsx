import React from "react";
import { CiShoppingCart } from "react-icons/ci";

function CartNavbar() {
  return (
    <div>
      <nav className="cartNavbar navbar-light ">
        <div className="container-lg d-flex align-items-center justify-content-between">
          <span>Pet's Love</span>
          <button className="cartBtn">
            <CiShoppingCart style={{ fontSize: "2em" }} />{" "}
            <span className="badge bg-danger ">9</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default CartNavbar;
