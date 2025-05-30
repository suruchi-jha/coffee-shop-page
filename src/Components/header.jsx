"use client"

import { Link, useNavigate } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { useAuth } from "../context/AuthContext"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Header() {
  const { user, logout } = useAuth()
  const { cart } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 700)
      const mainImage = document.getElementById("main-image")
      const mainImageHeight = mainImage ? mainImage.offsetHeight : 0
      setShowTitle(window.scrollY > mainImageHeight) // Trigger effect after 50px scroll
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/shop" ||
    location.pathname === "/category/coffee-&-beverages" ||
    location.pathname === "/category/bakery" ||
    location.pathname === "/category/specialty-items" ||
    location.pathname === "/category/vegan-options"

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  // Function to safely get the display name
  const getDisplayName = () => {
    if (user?.name) return user.name
    if (user?.email && typeof user.email === "string") return user.email.split("@")[0]
    return "User" // Fallback
  }

  return (
    <header>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${scrolled ? "scrolled" : "transparent"} ${isAuthPage ? "auth-navbar" : ""}`}
      >
        <div className="container-fluid">
          {(showTitle || isAuthPage) && (
            <HashLink smooth className="navbar-brand cite-font" to="/#home">
              Roasted Rituals Café
            </HashLink>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-3 hover-yellow">
                <HashLink smooth className="nav-link active" to="/#home" data-full-text="HOME">
                  Home
                </HashLink>
              </li>
              <li className="nav-item px-3">
                <HashLink smooth className="nav-link" to="/#menu" data-full-text="MENU">
                  Menu
                </HashLink>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/shop" data-full-text="SHOP">
                  Shop
                  {cartItemCount > 0 && <span className="badge bg-primary ms-1">{cartItemCount}</span>}
                </Link>
              </li>
              <li className="nav-item px-3">
                <HashLink smooth className="nav-link" to="/#contact" data-full-text="CONTACT">
                  Contact
                </HashLink>
              </li>
              {user ? (
                <>
                  <li className="nav-item px-3">
                    <span className="nav-link">Welcome, {getDisplayName()}</span>
                  </li>
                  <li className="nav-item px-3">
                    <button className="nav-link btn btn-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/login" data-full-text="LOGIN">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/signup" data-full-text="SIGN UP">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              {/* ... social media links ... */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
