import { motion } from "framer-motion"
import "./About.css"

function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      {/* TOP SPLIT SECTION */}
      <div className="about-top">

        <div className="about-left">
          <h1>Driven By Passion. Powered By Trust.</h1>
          <p>
            At Car Dealer, we redefine the car buying experience.
            Our mission is to deliver premium vehicles with complete
            transparency and unmatched customer satisfaction.
          </p>
        </div>

        <div className="about-highlight">
          <h3>10+ Years</h3>
          <p>Industry Experience</p>
        </div>

      </div>

      {/* STATS */}
      <div className="about-stats">
        <div>
          <h2>500+</h2>
          <p>Cars Sold</p>
        </div>
        <div>
          <h2>300+</h2>
          <p>Happy Clients</p>
        </div>
        <div>
          <h2>100%</h2>
          <p>Transparent Deals</p>
        </div>
      </div>

      {/* TWO COLUMN STORY */}
      <div className="about-grid">

        <div>
          <h2>Who We Are</h2>
          <p>
            We are a trusted dealership offering a wide range of
            vehicles from budget-friendly options to premium cars.
            Every vehicle goes through inspection to ensure quality
            and reliability.
          </p>
        </div>

        <div>
          <h2>Why Choose Us</h2>
          <ul>
            <li>✔ Transparent Pricing</li>
            <li>✔ Easy Booking Process</li>
            <li>✔ Verified Vehicles</li>
            <li>✔ Dedicated Support</li>
          </ul>
        </div>

      </div>

    </motion.div>
  )
}

export default About
