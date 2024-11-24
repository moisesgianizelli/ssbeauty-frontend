import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container main-color text-white py-5">
      <footer className="container">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">About Cameron Bakery</h5>
            <p>
              At Cameron Bakery, we craft freshly baked goods with love and
              dedication. Visit us to experience the taste of perfection every
              day.
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> 123 Main Street,
              Springfield, USA
            </p>
            <p>
              <i className="fas fa-phone"></i> +1 (555) 123-4567
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-white text-decoration-none">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-white text-decoration-none">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/specials"
                  className="text-white text-decoration-none"
                >
                  Specials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-white text-decoration-none"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <p>Connect with us on social media:</p>
            <div className="d-flex">
              <a
                href="https://www.facebook.com"
                className="text-white me-3 fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-white me-3 fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com"
                className="text-white fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-4 pt-4 border-top border-light">
          <div className="col text-center">
            <p className="mb-0">
              © 2024 Cameron Bakery. All Rights Reserved.{" "}
              <a href="/privacy-policy" className="text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/cookie-policy" className="text-white">
                Cookie Policy
              </a>
            </p>
            <p className="mb-0">
              Website by{" "}
              <a
                href="https://www.linkedin.com/in/moisesmunaldi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Moises Munaldi Web Developer
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
