import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import AnimatedSection from "./AnimatedSection"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner-container ">
        <div className="row g-4">
          <div className="col-md-4">
            <AnimatedSection animation="fade-up">
              <h5 className="footer-title">Roasted Rituals Café</h5>
              <p className="footer-text">Where every cup tells a story and every bite feels like home.</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="col-md-2">
            <AnimatedSection animation="fade-up" delay="delay-100">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li>
                  <HashLink smooth to="/#home">
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#menu">
                    Menu
                  </HashLink>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <HashLink smooth to="/#contact">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          <div className="col-md-3">
            <AnimatedSection animation="fade-up" delay="delay-200">
              <h5 className="footer-title">Opening Hours</h5>
              <ul className="footer-hours">
                <li>Monday - Friday: 7am - 8pm</li>
                <li>Saturday: 8am - 9pm</li>
                <li>Sunday: 8am - 7pm</li>
              </ul>
            </AnimatedSection>
          </div>

          <div className="col-md-3">
            <AnimatedSection animation="fade-up" delay="delay-300">
              <h5 className="footer-title">Contact Us</h5>
              <address className="footer-contact">
                <p>
                  <i className="fa-solid fa-location-dot me-2"></i> Select Citywalk Mall, New Delhi
                </p>
                <p>
                  <i className="fa-solid fa-phone me-2"></i> +91 99999 99999
                </p>
                <p>
                  <i className="fa-solid fa-envelope me-2"></i> info@roastedrituals.com
                </p>
              </address>
            </AnimatedSection>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="row py-2">
          <div className="col-md-6">
            <p className="copyright">Copyright © Suruchi Jha. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="policy-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
