import { useParams, useNavigate } from "react-router-dom"
import cardata from "../services/cardata"
import "./Cardetails.css"

function Cardetails() {

  const { id } = useParams()
  const navigate = useNavigate()

  const car = cardata.find((item) => item.id === Number(id))

  if (!car) {
    return <h2 className="not-found">Car not found</h2>
  }

  return (
    <div className="details-wrapper">

      {/* IMAGE HERO */}
      <div className="details-hero">
        <img src={car.image} alt={car.name} />
        <div className="details-overlay"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="details-container">

        <div className="details-header">
          <h1>{car.name}</h1>
          <h2 className="details-price">₹ {car.price}</h2>
        </div>

        {/* SPEC GRID */}
        <div className="spec-grid">
          <div>
            <h4>Fuel Type</h4>
            <p>{car.fuel}</p>
          </div>
          <div>
            <h4>Transmission</h4>
            <p>{car.transmission || "Automatic"}</p>
          </div>
          <div>
            <h4>Condition</h4>
            <p>Certified</p>
          </div>
          <div>
            <h4>Warranty</h4>
            <p>1 Year</p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="details-description">
          <h3>Performance Overview</h3>
          <p>
            This vehicle delivers outstanding performance, comfort, and reliability.
            Built for driving enthusiasts who demand precision engineering and
            superior road presence.
          </p>
        </div>

        {/* CTA */}
        <div className="details-cta">
          <button onClick={() => navigate("/Contact")}>
            Book Test Drive
          </button>

          <button onClick={() => navigate("/Contact")} className="secondary-btn">
            Enquire Now
          </button>
        </div>

      </div>

    </div>
  )
}

export default Cardetails
