'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="cart">
      <h3 className="cite-font-mid">Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                className="quantity-input"
              />
              <button onClick={() => removeFromCart(item.id)} className="btn btn-sm btn-danger">Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: ${cartTotal.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;