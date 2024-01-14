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
        {/*        {JSON.stringify(state.cartList)}
         */}{" "}
        <table className="table align-middle">
          <tbody>
            {state.cartList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <a href="#">x</a>
                  </td>
                  <td>
                    <img src={item.img_url} alt="" className="table-img" />
                  </td>
                  <td>
                    {item.name} <br />
                    <span className="text-muted">{item.price}</span>
                  </td>
                  <td>
                    <select
                      name=""
                      id=""
                      className="form-select"
                      value={item.quantity}
                      onChange={(e) => {
                        e.preventDefault();
                        const quantity = parseInt(e.target.value);
                        dispatch({
                          type: "CHANGE_CART_QUANTITY",
                          payload: {
                            ...item,
                            quantity,
                          },
                        });
                      }}
                    >
                      {[...Array(5)].map((_, i) => {
                        return (
                          <option value={i + 1} key={i}>
                            {i + 1}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td className="text-end"> €{item.price * item.quantity}</td>
                </tr>
              );
            })}
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
