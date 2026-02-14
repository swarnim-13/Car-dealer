import { useState } from "react"
import "./Addcar.css"

function Addcar() {

  const [step, setStep] = useState(1)
  const [preview, setPreview] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    model: "",
    year: "",
    fuel: "",
    km: "",
    price: "",
    description: "",
    phone: "",
    email: "",
    image: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === "image") {
      const file = files[0]
      setFormData({ ...formData, image: file })
      setPreview(URL.createObjectURL(file))
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Car Submitted Successfully (Demo)")
  }

  return (
    <div className="sell-wrapper">

      {/* STEP INDICATOR */}
      <div className="step-indicator">
        <div className={step >= 1 ? "active" : ""}>Car Details</div>
        <div className={step >= 2 ? "active" : ""}>Pricing</div>
        <div className={step >= 3 ? "active" : ""}>Contact Info</div>
      </div>

      <div className="sell-card">
        <h2>Sell Your Car</h2>

        <form onSubmit={handleSubmit}>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Brand Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="model"
                  placeholder="Model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                />

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>

                <select
                  name="fuel"
                  value={formData.fuel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Fuel Type</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                </select>

                <input
                  type="text"
                  name="registration number"
                  placeholder="Registration Number"
                  value={formData.register}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="varient"
                  placeholder=" Varient:-luxury , sports ,etc"
                  value={formData.varient}
                  onChange={handleChange}
                  required
                />
                
                
              </div>

              <div className="btn-row">
                <button type="button" onClick={nextStep}>
                  Continue →
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <input
                type="text"
                name="price"
                placeholder="Expected Price (₹)"
                value={formData.price}
                onChange={handleChange}
                required
              />

              <textarea
                name="description"
                placeholder="Describe your car condition..."
                value={formData.description}
                onChange={handleChange}
                required
              />

              {/* IMAGE UPLOAD */}
              <div className="image-upload">
                <label>Upload Car Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />

                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="image-preview"
                  />
                )}
              </div>

              <div className="btn-row">
                <button type="button" className="back" onClick={prevStep}>
                  Back
                </button>

                <button type="button" onClick={nextStep}>
                  Continue →
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="btn-row">
                <button type="button" className="back" onClick={prevStep}>
                  Back
                </button>

                <button type="submit">
                  Submit Car
                </button>
              </div>
            </>
          )}

        </form>
      </div>
    </div>
  )
}

export default Addcar
