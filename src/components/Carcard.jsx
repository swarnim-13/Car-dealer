import { Link } from "react-router-dom"
import "./Carcard.css"

function Carcard({ car }) {
  return (
    <Link to={`/car/${car.id}`} className="car-link">
      <div className="car-card cursor-target">

        <div className="car-image">
          <img src={car.image} alt={car.name} />
        </div>

        <div className="car-content">
          <h3>{car.name}</h3>
          <p className="car-price">₹ {car.price}</p>
          <p className="car-fuel">{car.fuel}</p>
        </div>

      </div>
    </Link>
  )
}

export default Carcard


