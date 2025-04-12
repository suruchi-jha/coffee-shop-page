"use client"

import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cart.length === 0) {
    return <p className="text-center">Your cart is empty.</p>
  }

  return (
    <div className="cart">
      {cart.map((item) => (
        <div key={item.id} className="cart-item d-flex justify-content-between align-items-center py-2">
          <div>
            <h6 className="mb-0">{item.name}</h6>
            <small className="text-muted">${item.price.toFixed(2)} each</small>
          </div>
          <div className="d-flex align-items-center">
            <div className="input-group input-group-sm me-2" style={{ width: "80px" }}>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <input
                type="number"
                className="form-control text-center"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 0)}
                min="1"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between border-top pt-2 mt-2">
        <strong>Total:</strong>
        <strong>${cartTotal.toFixed(2)}</strong>
      </div>
    </div>
  )
}

export default Cart
