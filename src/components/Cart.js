import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1 className="cart">Cart Page</h1>
      <button className="clear-button" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="cart-container">
        <div className="container-div">
          {cartItems?.length === 0 && <h1>Please Add Items to the cart!!!</h1>}
          <ItemList items={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Cart;
