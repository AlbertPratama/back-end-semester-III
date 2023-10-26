import React, { useContext } from "react";
import { ShopContext } from './shop-context.jsx'; 

export const CartItem = (props) => {
  const { id, name, harga, url } = props.data; 
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={url} alt={name}/> 
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: {harga}</p>
        
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
