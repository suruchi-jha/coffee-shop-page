"use client"
import { useParams, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext"
import AnimatedSection from "./AnimatedSection"

// Product data with images (same as in ShopPage)
const allProducts = [
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
const getPlaceholderImage = (category) => {
    switch (category) {
      case "Coffee & Beverages":
        return "/assets/main-coffee.webp"
      case "Bakery":
        return "/assets/placeholder-bakery.jpg"
      case "Specialty Items":
        return "/assets/placeholder-specialty.jpg"
      case "Vegan Options":
        return "/assets/placeholder-vegan.jpg"
      default:
        return "/assets/placeholder.jpg" // generic fallback
    }
  }

const CategoryPage = () => {
  const { categoryId } = useParams()
  const { user } = useAuth()
  const { addToCart } = useCart()

  // Convert category ID (slug) back to category name
  const categoryName = categoryId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Filter products by category
  const categoryProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase(),
  )

  if (!user) {
    return (
      <div className="container py-5">
        <AnimatedSection animation="fade-scale">
          <div className="text-center">
            <h2>{categoryName}</h2>
            <p>Please login or sign up to view products and place orders.</p>
            <Link to="/login" className="btn btn-primary me-2">
              Login
            </Link>
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
          <div className="col-12">
            <AnimatedSection animation="fade-up">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>{categoryName}</h1>
                <Link to="/shop" className="btn btn-outline-primary">
                  View All Products
                </Link>
              </div>
            </AnimatedSection>

            {/* Product Grid */}
            <div className="row g-3">
              {categoryProducts.length > 0 ? (
                categoryProducts.map((product, index) => (
                  <AnimatedSection
                    key={product.id}
                    className="col-md-4 col-lg-3"
                    animation="fade-up"
                    delay={`delay-${((index % 4) + 1) * 100}`}
                  >
                    <div className="card h-100 product-card">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                        height="200"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = getPlaceholderImage(product.category)
                        }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text text-muted small mb-2">{product.description}</p>
                        <p className="card-text price-text mb-2">${product.price.toFixed(2)}</p>
                        <div className="mt-auto">
                          <button className="btn btn-primary btn-sm w-100" onClick={() => addToCart(product)}>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p>No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
