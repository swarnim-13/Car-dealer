import { useState } from "react"
import { motion } from "framer-motion"
import "./Contact.css"

function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div
      className="contact-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      {/* Dark Overlay */}
      <div className="contact-overlay"></div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Contact Our Team</h2>
          <p>
            Our automotive experts are here to assist you.
            Reach out today and experience premium service.
          </p>

          <div className="info-item">📍 123 Auto Street, New Delhi</div>
          <div className="info-item">📞 +91 98765 43210</div>
          <div className="info-item">✉ info@cardealer.com</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-box">
          <h1>Send Enquiry</h1>

          {submitted && (
            <div className="success-msg">
              ✅ Enquiry Submitted Successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">
              Submit
            </button>

          </form>
        </div>

      </div>
    </motion.div>
  )
}

export default Contact
