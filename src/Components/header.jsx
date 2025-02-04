import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Trigger effect after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav className={`navbar fixed-top navbar-expand-lg ${scrolled ? "scrolled" : "transparent"}`}>
        <div className="container-fluid">
          <HashLink smooth className="navbar-brand cite-font" to="/#home">
            Roasted Rituals Café
          </HashLink>
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
              {/* ... social media links ... */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

