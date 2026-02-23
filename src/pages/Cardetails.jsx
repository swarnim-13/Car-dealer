import { useParams } from "react-router-dom"
import cardata from "../services/cardata"
import "./Cardetails.css"
import { useState } from "react"

function Cardetails() {

  const { id } = useParams()
  const car = cardata.find((c) => c.id === Number(id))

  const [mainImage, setMainImage] = useState(car?.image)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  if (!car) {
    return <h2 style={{ padding: "150px 60px" }}>Car Not Found</h2>
  }

  return (
    <div className="details-wrapper">

      <div className="details-container">

        {/* LEFT IMAGE GALLERY */}
        <div className="details-left">

          <div className="main-image">
            <img 
              src={mainImage} 
              alt={car.name}
              onClick={() => setIsPreviewOpen(true)}
              style={{ cursor: "zoom-in" }}
            />
          </div>

          <div className="thumbnail-row">
            {[car.image, car.image1, car.image2, car.image3].map((img, index) => (
              img && (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  onClick={() => setMainImage(img)}
                  
                />
                
              )
            ))}
          </div>

        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="details-right">

          <h1>{car.name}</h1>
          <p className="car-sub">
            {car.Year} • {car.KM} km • {car.fuel}
          </p>

          <div className="price-card">
            <p>Price</p>
            <h2>{car.price}</h2>
          </div>

          <div className="spec-grid">

            <div>
              <p>Year</p>
              <h4>{car.Year}</h4>
            </div>

            <div>
              <p>KM Driven</p>
              <h4>{car.KM}</h4>
            </div>

            <div>
              <p>Fuel</p>
              <h4>{car.fuel}</h4>
            </div>

            <div>
              <p>Status</p>
              <h4>{car.status || "Available"}</h4>
            </div>

          </div>

          <div className="details-buttons">

            <a href="/Contact">
              <button className="call-btn">Call</button>
            </a>

            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
              <button className="whatsapp-btn">WhatsApp</button>
            </a>

          </div>

        </div>

      </div>

      {/* FULLSCREEN IMAGE PREVIEW */}
      {isPreviewOpen && (
        <div 
          className="image-preview-overlay"
          onClick={() => setIsPreviewOpen(false)}
        >
          <img 
            src={mainImage} 
            alt="Full Preview"
            className="image-preview"
            
          />
        </div>
      )}

    </div>
  )
}

export default Cardetails