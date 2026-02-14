import { useEffect, useState } from "react"
import "./App.css"

import Navbar from './components/Navbar'
import About from './pages/About'
import Car from './pages/Car'
import Addcar from './pages/Addcar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Cardetails from './pages/Cardetails'

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"


/* ================= SCROLL TO TOP ================= */




/* ================= MAIN APP ================= */

function App() {

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  return (
    <BrowserRouter>

       <ScrollToTop />

      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {/* IMPORTANT: Footer ko page-content ke bahar rakho */}
      <div className="page-content">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Car" element={<Car />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Car/:id" element={<Cardetails />} />
          <Route path="/add-car" element={<Addcar />} />
        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  )
}

export default App
