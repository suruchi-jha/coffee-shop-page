import React from "react"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

function Order () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const categoryItems = {
    coffee: ["Espresso", "Cappuccino", "Latte", "Cold Brew", "Iced Americano"],
    bakery: ["Croissant", "Muffin", "Bagel", "Scone", "Chocolate Cake"],
    specialty: ["Pumpkin Spice Latte", "Affogato", "Irish Coffee"],
    vegan: ["Vegan Brownie", "Almond Milk Latte", "Vegan Croissant"],
  };

  const { user } = useAuth()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    items: [],
    quantity: 1,
    notes: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      // Scroll to login section if user is not authenticated
      document.getElementById("login").scrollIntoView({ behavior: "smooth" })
      return
    }

    // Handle order submission
    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Order placed successfully!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: "",
          items: [],
          quantity: 1,
          notes: "",
        })
      }
    } catch (error) {
      console.error("Error placing order:", error)
    }
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
    )
  }

  return (
    <div className="container-lg order-container py-5" id="order">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="cite-font-big">Place Your Order!</h2>
          <p className="text-muted">Fill out the form below to order your favorite treats and drinks!</p>
        </div>
        <div className="col-12 col-md-8 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="orderName" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="orderName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="orderEmail" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="orderEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="orderPhone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="orderPhone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categorySelect" className="form-label">
                Select Category
              </label>
              <select
                className="form-select"
                id="categorySelect"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setItems([]);
                }}
                required
              >
                <option value="" disabled>
                  Choose a category
                </option>
                <option value="coffee">Coffee & Beverages</option>
                <option value="bakery">Bakery</option>
                <option value="specialty">Specialty Items</option>
                <option value="vegan">Vegan Options</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="itemSelect" className="form-label">
                Select Your Items
              </label>
              <select
                className="form-select"
                id="itemSelect"
                multiple
                value={items}
                onChange={(e) => setItems(Array.from(e.target.selectedOptions, (option) => option.value))}
                required
              >
                {category ? (
                  categoryItems[category].map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))
                ) : (
                  <option value="" disabled>Select a category first</option>
                )}
                {/* You would populate this based on the selected category */}
              </select>
              <small className="text-muted">Hold down Ctrl (Windows) / Command (Mac) to select multiple items.</small>
            </div>
            <div className="mb-3">
              <label htmlFor="orderQuantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="orderQuantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="orderNotes" className="form-label">
                Special Instructions
              </label>
              <textarea
                className="form-control"
                id="orderNotes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Order

