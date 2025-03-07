'use client';

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Cart from "./cart";

function Order() {
  const { user } = useAuth();
  const { cart, cartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      alert("Please log in to place an order");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          items: cart,
          total: cartTotal,
        }),
      });

      if (response.ok) {
        setOrderPlaced(true);
        clearCart();
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  if (orderPlaced) {
    return (
      <section id="order" className="container-lg order-container py-5">
        <h2>Thank you for your order!</h2>
        <p>Your order has been placed successfully.</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section id="order" className="container-lg order-container py-5">
        <div className="text-center">
          <h2>Place Your Order</h2>
          <p>Please login or sign up to place an order.</p>
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
          <p> or </p>
          <Link to="/signup" className="btn btn-secondary">
            Sign Up
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="container-lg order-container py-5" id="order">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="cite-font-big">Place Your Order!</h2>
          <p className="text-muted">Use the buttons in our menu to order your favorite treats and drinks!</p>
        </div>
        <div className="col-12 col-md-8 mx-auto">
          <Cart />
          {cart.length > 0 && (
            <button className="btn btn-primary w-100 mt-3" onClick={handleCheckout}>
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
