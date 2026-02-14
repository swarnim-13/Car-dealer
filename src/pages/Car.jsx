import { useState } from "react"
import cardata from "../services/cardata"
import Carcard from "../components/Carcard"
import "./Car.css"

function Car() {

  const [priceRange, setPriceRange] = useState("all")
  const [fuelType, setFuelType] = useState("all")

  // Filtering Logic
  const filteredCars = cardata.filter((car) => {

    const priceNumber = Number(car.price.replace(/[^\d]/g, ""))

    let priceMatch = true
    let fuelMatch = true

    if (priceRange === "low") {
      priceMatch = priceNumber <= 600000
    }

    if (priceRange === "mid") {
      priceMatch = priceNumber > 600000 && priceNumber <= 1000000
    }

    if (priceRange === "high") {
      priceMatch = priceNumber > 1000000
    }

    if (fuelType !== "all") {
      fuelMatch = car.fuel.toLowerCase() === fuelType
    }

    return priceMatch && fuelMatch
  })

  return (
    <div className="car-page">

      {/* SECTION HEADER */}
      <div className="car-header">
        <h2>🚗 Recommended For You</h2>
        <p>Discover the best vehicles based on your preferences.</p>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">

        <div className="filter-group">
          <label>Price Range</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Below ₹6 Lakh</option>
            <option value="mid">₹6L - ₹10L</option>
            <option value="high">Above ₹10 Lakh</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Fuel Type</label>
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          >
            <option value="all">All Fuel</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
          </select>
        </div>

      </div>

      {/* CAR GRID */}
      <div className="car-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <Carcard key={car.id} car={car} />
          ))
        ) : (
          <p className="no-result">No Cars Found</p>
        )}
      </div>

    </div>
  )
}

export default Car
