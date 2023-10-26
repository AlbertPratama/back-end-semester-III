import React, { useContext } from "react";
import { ShopContext } from './shop-context.jsx'; // Ganti dengan path yang sesuai
import { CartItem } from "./cart-item.jsx";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./theme-context.js"; // Pastikan path ini benar
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();

  return (
    <div className={`cart ${isDarkMode ? "dark" : "light"}`}>
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cart">
        {Object.keys(cartItems).map((productId) => {
          if (cartItems[productId] > 0) {
            return <CartItem key={productId} data={{ id: productId, ...cartItems[productId] }} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <div id="Todo">
          <h1> Your Shopping Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
