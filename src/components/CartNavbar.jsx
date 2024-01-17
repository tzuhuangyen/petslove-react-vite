import React from "react";
import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "./Context";

function CartNavbar() {
  const { state } = useContext(CartContext);

  return (
    <div>
      <nav className="cartNavbar navbar-light ">
        <div className="container-lg d-flex align-items-center justify-content-between">
          <span>Pet's Love</span>
          <button className="cartBtn">
            <CiShoppingCart style={{ fontSize: "2em" }} />{" "}
            <span className="badge bg-danger ">{state.cartList.length}</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default CartNavbar;
