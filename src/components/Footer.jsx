import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND SECTION */}
        <div className="footer-col">
          <h2 className="footer-logo">Car Dealer</h2>
          <p>
            Premium performance vehicles. Trusted dealership delivering
            excellence, transparency and unmatched driving experience.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/Car">Cars</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <p>Buy New Cars</p>
          <p>Sell Your Car</p>
          <p>Car Financing</p>
          <p>Test Drive Booking</p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <p>📍 123 Auto Street, New Delhi</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ info@cardealer.com</p>

          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 Car Dealer. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer
