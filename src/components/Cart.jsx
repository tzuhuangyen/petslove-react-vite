import React from "react";
import { useContext } from "react";
import { CartContext } from "../Store";

function Cart() {
  const contextValue = useContext(CartContext);
  const { state, dispatch } = contextValue;
  // Check if state and state.cartList are defined before accessing
  const cartList = state && state.cartList ? state.cartList : [];
  return (
    <div>
      <div className="bg-light p-3">
        {JSON.stringify(state.cartList)}
        <table className="table align-middle">
          <tbody>
            <tr>
              <td>
                <a href="#">x</a>
              </td>
              <td>
                <img src="" alt="" className="table-img" />
              </td>
              <td>
                name <br />
                <span className="text-muted">price</span>
              </td>
              <td>
                <select name="" id="" className="form-select"></select>
              </td>
              <td className="text-end"> €10</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              {" "}
              <td colSpan={5} className="text-end">
                Total €10
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Cart;
