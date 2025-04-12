'use client';

import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

function Order() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <section
      id="order"
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: "100vh", width: "100vw", backgroundColor: "#fff" }} // Corrected color syntax
    >
      {!user ? (
        <AnimatedSection animation="animate-scale">
          <h2>Place Your Order</h2>
          <p>Please login or sign up to place an order.</p>
          <div>
            <Link to="/login" className="btn btn-secondary mx-2">
              Login
            </Link>
            <p>or</p>
            <Link to="/signup" className="btn btn-secondary mx-2">
              Sign Up
            </Link>
          </div>
        </AnimatedSection>
      ) : (
        <AnimatedSection animation="animate-scale">
          <h2>Ready to Order?</h2>
          <p>Proceed to the shop to continue placing your order.</p>
          <button className="btn btn-secondary" onClick={() => navigate("/shop")}>
            Go to Shop
          </button>
        </AnimatedSection>
      )}
    </section>
  );
}

export default Order;
