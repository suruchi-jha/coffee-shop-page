import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { useAuth } from "../context/AuthContext"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";


function Header () {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation(); 
  const [scrolled, setScrolled] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const handleLogout = () => {
    logout()
    navigate("/")
    }
    useEffect(() => {
      const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 700);
      const mainImage = document.getElementById('main-image');
      const mainImageHeight = mainImage ? mainImage.offsetHeight : 0;
      setShowTitle(window.scrollY > mainImageHeight); // Trigger effect after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <header>
      <nav className={`navbar fixed-top navbar-expand-lg ${scrolled ? "scrolled" : "transparent"} ${isAuthPage ? "auth-navbar" : ""}`}>
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
                <HashLink smooth className="nav-link" to="/#order" data-full-text="ORDER">
                  Order
                </HashLink>
              </li>
              <li className="nav-item px-3">
                <HashLink smooth className="nav-link" to="/#contact" data-full-text="CONTACT">
                  Contact
                </HashLink>
              </li>
              {user ? (
                <>
                  <li className="nav-item px-3">
                    <span className="nav-link">Welcome, {user.name}</span>
                  </li>
                  <li className="nav-item px-3">
                    <button className="nav-link btn btn-link" onClick={logout}>
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

