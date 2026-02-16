// components ke andr ham reusable chizen likhte h jo code har jagh reuse hoga vo
import { Link } from "react-router-dom"
import { useState } from "react"
import EMICalculator from "./EMICalculator"
import "./Navbar.css"

function Navbar({ toggleTheme, theme }) {

  const [showEMI, setShowEMI] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <h2 className="logo">Car Dealer</h2>

          {/* HAMBURGER */}
          <div 
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? "show" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/Car" onClick={() => setMenuOpen(false)}>Buy Cars</Link>
            <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <button 
              className="emi-btn"
              onClick={() => {
                setShowEMI(true)
                setMenuOpen(false)
              }}
            >
              EMI Calculator
            </button>

            {/* <button className="theme-switch" onClick={toggleTheme}>
              {theme === "dark" ? "☀ Light" : "🌙 Dark"}
            </button> */}

            <Link 
              to="/add-car" 
              className="sell-btn"
              onClick={() => setMenuOpen(false)}
            >
              Sell Car
            </Link>
          </div>

        </div>
      </nav>

      {showEMI && (
        <EMICalculator onClose={() => setShowEMI(false)} />
      )}
    </>
  )
}

export default Navbar

// yha mene jo navbar banaya h usse app.jsx jo meri main file h vha import kr lunga


