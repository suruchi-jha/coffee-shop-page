"use client"

import React from "react"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import Cart from "./cart"
import AnimatedSection from "./AnimatedSection"
import { API_URL } from "../config"

// Product data with images
const products = [
  {
    id: 1,
    name: "Espresso",
    price: 3.5,
    category: "Coffee & Beverages",
    image: "/assets/espresso.webp",
    description: "Rich and intense espresso shot, the foundation of coffee excellence.",
  },
  {
    id: 2,
    name: "Americano",
    price: 4.0,
    category: "Coffee & Beverages",
    image: "/assets/americano.webp",
    description: "Espresso diluted with hot water, delivering a milder coffee experience.",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 4.75,
    category: "Coffee & Beverages",
    image: "/assets/cappuccino.webp",
    description: "Perfect balance of espresso, steamed milk, and foamed milk.",
  },
  {
    id: 4,
    name: "Latte",
    price: 5.25,
    category: "Coffee & Beverages",
    image: "/assets/latte.jpg",
    description: "Espresso with steamed milk and a light layer of foam.",
  },
  {
    id: 5,
    name: "Iced Coffee",
    price: 5.5,
    category: "Coffee & Beverages",
    image: "/assets/iced-coffee.webp",
    description: "Chilled coffee served over ice, perfect for warm days.",
  },
  {
    id: 6,
    name: "Cold Brew",
    price: 5.75,
    category: "Coffee & Beverages",
    image: "/assets/cold-brew.jpg",
    description: "Coffee steeped in cold water for 12+ hours, resulting in a smooth, less acidic flavor.",
  },
  {
    id: 7,
    name: "Croissants",
    price: 4.55,
    category: "Bakery",
    image: "/assets/croissants.jpeg",
    description: "Buttery, flaky pastry with a golden-brown crust.",
  },
  {
    id: 8,
    name: "Bagels",
    price: 4.7,
    category: "Bakery",
    image: "/assets/bagel.jpg",
    description: "Freshly baked bagels, perfect with cream cheese or as a sandwich.",
  },
  {
    id: 9,
    name: "Donuts",
    price: 5.35,
    category: "Bakery",
    image: "/assets/donuts.webp",
    description: "Sweet, fried dough treats with various toppings and fillings.",
  },
  {
    id: 10,
    name: "Brownies",
    price: 3.85,
    category: "Bakery",
    image: "/assets/brownie.webp",
    description: "Rich, fudgy chocolate brownies that melt in your mouth.",
  },
  {
    id: 11,
    name: "Scones",
    price: 4.5,
    category: "Bakery",
    image: "/assets/scones.jpg",
    description: "Lightly sweetened baked treats, perfect with tea or coffee.",
  },
  {
    id: 12,
    name: "Pumpkin Spice Latte",
    price: 6.0,
    category: "Specialty Items",
    image: "/assets/pumpkin-spice.jpeg",
    description: "Seasonal favorite with espresso, pumpkin spice, and steamed milk.",
  },
  {
    id: 13,
    name: "Chai ",
    price: 5.5,
    category: "Specialty Items",
    image: "/assets/chai.jpg",
    description: "Spiced tea with frothy steamed milk.",
  },
  {
    id: 14,
    name: "Affogato",
    price: 6.25,
    category: "Specialty Items",
    image: "/assets/affogato.webp",
    description: "Espresso poured over vanilla ice cream.",
  },
  {
    id: 15,
    name: "Ice Cream Sandwich",
    price: 4.5,
    category: "Specialty Items",
    image: "/assets/ice-cream.webp",
    description: "Creamy ice cream between soft cookies.",
  },
  {
    id: 16,
    name: "Vegan Brownies",
    price: 4.0,
    category: "Vegan Options",
    image: "/assets/vegan-brownies.jpg",
    description: "Plant-based, chocolatey, and delicious.",
  },
  {
    id: 17,
    name: "Vegan Muffins",
    price: 3.5,
    category: "Vegan Options",
    image: "/assets/vegan-muffins.jpg",
    description: "Soft and flavorful dairy-free muffins.",
  },
  {
    id: 18,
    name: "Oat Milk Latte",
    price: 5.5,
    category: "Vegan Options",
    image: "/assets/oat-milk-latte.jpg",
    description: "Smooth espresso with creamy oat milk.",
  },
]

// For placeholder images
const getPlaceholderImage = (name) => {
  return `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(name)}`
}

const ShopPage = () => {
  const { user } = useAuth()
  const { addToCart, cart, cartTotal, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const handleCheckout = async () => {
    if (!user) {
      alert("Please log in to place an order")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          items: cart,
          total: cartTotal,
        }),
      })

      if (response.ok) {
        setOrderPlaced(true)
        clearCart()
      } else {
        const data = await response.json()
        setError(data.message || "Failed to place order. Please try again.")
      }
    } catch (error) {
      console.error("Error placing order:", error)
      setError("An error occurred. Please check if the server is running.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleBuyNow = (product) => {
    addToCart(product)
    window.scrollTo({
      top: document.getElementById("cart-section").offsetTop,
      behavior: "smooth",
    })
  }

  const categories = ["All", ...new Set(products.map((product) => product.category))]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  if (orderPlaced) {
    return (
      <div className="container py-5">
        <AnimatedSection animation="fade-scale">
          <div className="text-center">
            <h2>Thank you for your order!</h2>
            <p>Your order has been placed successfully.</p>
            <button className="btn btn-primary mt-3" onClick={() => setOrderPlaced(false)}>
              Place Another Order
            </button>
          </div>
        </AnimatedSection>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container py-5">
        <AnimatedSection animation="fade-scale">
          <div className="text-center">
            <h2>Shop Our Products</h2>
            <p>Please login or sign up to place an order.</p>
            <Link to="/login" className="btn btn-secondary me-2">
              Login
            </Link>
            <p>or</p>
            <Link to="/signup" className="btn btn-secondary">
              Sign Up
            </Link>
          </div>
        </AnimatedSection>
      </div>
    )
  }

  return (
    <div className="shop-container">
      <div className="container py-4">
        <div className="row">
          {/* Left side - Products */}
          <div className="col-md-8">
            <AnimatedSection animation="fade-up">
              <h1 className="text-center mb-4">Shop Our Products</h1>
            </AnimatedSection>

            {/* Category Filter */}
            <AnimatedSection animation="fade-up" delay="delay-200">
              <div className="category-filter mb-3">
                <div className="d-flex justify-content-center flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"} m-1`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Product Grid */}
            <div className="row g-3">
              {filteredProducts.map((product, index) => (
                <AnimatedSection
                  key={product.id}
                  className="col-md-6 col-lg-3"
                  animation="fade-up"
                  delay={`delay-${((index % 4) + 1) * 100}`}
                >
                  <div className="card h-100 product-card">
                    <img
                      src={product.image || getPlaceholderImage(product.name)}
                      className="card-img-top"
                      alt={product.name}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = getPlaceholderImage(product.name)
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text text-muted small mb-2">{product.description}</p>
                      <p className="card-text price-text mb-2">${product.price.toFixed(2)}</p>
                      <div className="mt-auto">
                        <button
                          className="btn btn-outline-primary btn-sm w-100 mb-2"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                        <button className="btn btn-primary btn-sm w-100" onClick={() => handleBuyNow(product)}>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right side - Cart */}
          <AnimatedSection className="col-md-4" animation="fade-left">
            <div className="cart-sidebar" id="cart-section">
              <h2 className="h4 mb-3">Your Order</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <Cart />
              {cart.length > 0 && (
                <button className="btn btn-primary w-100 mt-3" onClick={handleCheckout} disabled={isLoading}>
                  {isLoading ? "Processing..." : "Checkout"}
                </button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
