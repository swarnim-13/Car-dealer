// components ke andr ham reusable chizen likhte h jo code har jagh reuse hoga vo
import { Link } from "react-router-dom"
import { useState } from "react"
import EMICalculator from "./EMICalculator"
import "./Navbar.css"

function Navbar({ toggleTheme, theme }) {

  const [showEMI, setShowEMI] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <h2 className="logo">Car Dealer</h2>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/Car">Buy Cars</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>

            {/* EMI Button */}
            <button 
              className="emi-btn"
              onClick={() => setShowEMI(true)}
            >
              EMI Calculator
            </button>

            {/* Theme Toggle */}
            <button 
              className="theme-switch" 
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀ Light" : "🌙 Dark"}
            </button>

            {/* Sell Car */}
            <Link to="/add-car" className="sell-btn">
              Sell Car
            </Link>

          </div>

        </div>
      </nav>

      {/* EMI Popup */}
      {showEMI && (
        <EMICalculator onClose={() => setShowEMI(false)} />
      )}
    </>
  )
}

export default Navbar


// yha mene jo navbar banaya h usse app.jsx jo meri main file h vha import kr lunga


