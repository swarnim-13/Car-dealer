import { useNavigate } from "react-router-dom"
import "./home.css"

function Home() {

  const navigate = useNavigate()

  return (
    
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Unleash The Power</h1>
        
          <button onClick={() => navigate("/Car")}>
            Explore Cars
          </button>
<button onClick={() => navigate("Add-car")}>
            Sell Car
          </button>
          
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="featured-section">
        <h2>Featured Performance Cars</h2>
        <p>
          Discover our latest high-performance machines built for power and precision.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          <div>
            <h3>Certified Vehicles</h3>
            <p>Every vehicle is inspected and verified for peak performance.</p>
          </div>

          <div>
            <h3>Transparent Pricing</h3>
            <p>No hidden costs. No surprises. Just honest deals.</p>
          </div>

          <div>
            <h3>Performance Experts</h3>
            <p>Our team understands speed, torque and driving dynamics.</p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <h2>Our Process</h2>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Choose Your Car</h3>
          </div>

          <div>
            <span>02</span>
            <h3>Book Test Drive</h3>
          </div>

          <div>
            <span>03</span>
            <h3>Drive Home</h3>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div>
          <h2>500+</h2>
          <p>Cars Delivered</p>
        </div>
        <div>
          <h2>300+</h2>
          <p>Satisfied Clients</p>
        </div>
        <div>
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <h2>Our Premium Collection</h2>
        <p>Explore some of our top-performing machines.</p>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" alt="car" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80" alt="car" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80" alt="car" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              "Amazing buying experience. The team was professional and transparent.
              Highly recommended dealership!"
            </p>
            <h4>— Rahul Sharma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Got my dream car with smooth documentation and zero hassle.
              Premium service throughout."
            </p>
            <h4>— Ankit Verma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Best pricing in the market. Certified vehicles and excellent support."
            </p>
            <h4>— Neha Kapoor</h4>
          </div>

        </div>
      </section>


{/* OWNER SECTION */}
<section className="owner-section">

  <h2>Meet Our Leadership</h2>

  <div className="owner-container">

    <div className="owner-card">
      <div className="owner-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
          alt="Owner"
        />
        <div className="owner-badge">★</div>
      </div>

      <h3>Arjun Malhotra</h3>
      <p className="owner-role">Founder & CEO</p>
      <p className="owner-desc">
        18+ years in premium automobile industry. Passionate about performance,
        precision engineering and delivering unmatched customer satisfaction.
      </p>
    </div>

    <div className="owner-card">
      <div className="owner-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=crop&w=600&q=80"
          alt="Co-Founder"
        />
        <div className="owner-badge">★</div>
      </div>

      <h3>Rohit Kapoor</h3>
      <p className="owner-role">Head of Operations</p>
      <p className="owner-desc">
        Expert in vehicle verification and dealership operations.
        Ensures every car meets the highest quality standards.
      </p>
    </div>

  </div>

</section>






    </div>
  )
}

export default Home
