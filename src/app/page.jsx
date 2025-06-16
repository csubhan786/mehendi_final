"use client";
import GradientButton from "./components/button";
//import { useState } from "react";
//import GradientButton from "./components/button";
//import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
export default function HomePage() {
  return (
    <>
      <style>{`
        body {
          background: linear-gradient(to bottom, #0b3d2e, #000);
          color: white;
          font-family: "Poppins", sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        .hero-section {
          text-align: center;
          padding: 100px 20px;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .hero-image {
          max-height: 400px;
          width: 86%;
          border-radius: 15px;
          box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.3);
          object-fit: cover;
          transform: scale(1.1);
          animation: parallax 20s infinite linear;
          transition: transform 0.3s ease;
        }
        .hero-image:hover {
          transform: scale(1.15);
        }
        @keyframes parallax {
          0% { transform: scale(1.1) translateY(0); }
          50% { transform: scale(1.1) translateY(10px); }
          100% { transform: scale(1.1) translateY(0); }
        }
        .hero-title,
        .about-section h2,
        .services-section h2,
        .testimonials-section h2,
        .cta-section h2 {
          color: #f7c400;
        }
        .hero-title {
          font-size: 3.8rem;
          font-weight: 700;
          text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
          margin-top: 30px;
          transition: color 0.3s ease;
        }
        .hero-title:hover {
          color: #ffcc00;
        }
        .hero-subtitle {
          font-size: 1.4rem;
          color: #cfcfcf;
          margin-top: 10px;
          letter-spacing: 1px;
          font-weight: 300;
        }
        .about-section {
          padding: 60px 20px;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          margin: 30px auto;
          max-width: 900px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .services-section {
          padding: 80px 20px;
          text-align: center;
        }
        .service-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          overflow: hidden;
          position: relative;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
        .service-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.25));
        }
        .service-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
          transition: transform 0.3s ease;
        }
        .service-image:hover {
          transform: scale(1.1);
        }
        .service-content {
          margin-top: 15px;
          padding: 15px;
        }
        .testimonials-section {
          padding: 60px 20px;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          margin: 30px auto;
          border-radius: 15px;
          max-width: 900px;
        }
        .testimonial {
          margin: 30px 0;
          font-style: italic;
          font-size: 1.2rem;
          line-height: 1.5;
        }
        .testimonial h5 {
          margin-top: 15px;
          font-weight: 700;
        }
        .cta-section {
          text-align: center;
          padding: 80px 20px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5));
          border-radius: 15px;
          margin: 30px auto;
          max-width: 900px;
        }
        .cta-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #f7c400;
        }
        @media (max-width: 767px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .service-card {
            margin-bottom: 20px;
          }
          .service-image-container {
            height: 150px;
          }
          .cta-section h2 {
            font-size: 2rem;
          }
        }
          .gallery-section {
  margin-top: 40px;
}

.gallery-image-wrapper {
  border: 4px solid #ffd700; /* golden */
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.2);
}

.gallery-image-wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(255, 215, 0, 0.4);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

      `}</style>

      <header className="hero-section">
        <div className="container text-center">
          <img
            src="/images/home_page.jpg"
            alt="Beautiful Mehendi Art Display"
            className="hero-image"
          />
          <h1 className="hero-title">Beautiful Mehendi Art</h1>
          <p className="hero-subtitle">
            Elegant and intricate Mehendi designs for every occasion.
          </p>
          <GradientButton
            text="Call Now"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </header>
      <div className="gallery-section container mt-5">
  <h2 style={{ color: "#f7c400", marginBottom: "30px" }}>Mehendi Gallery</h2>
  <div className="row">
    {[
      "/images/home/gallary1.jpg",
      "/images/home/gallary2.jpg",
      "/images/home/gallary3.jpg",
      "/images/home/gallary4.jpg",
      "/images/home/gallary5.jpg",
      "/images/home/gallary6.jpg",
      "/images/home/gallary7.jpg",
      "/images/home/gallary8.jpg",
      "/images/home/gallary9.jpg",
      "/images/home/gallary10.jpg",
      "/images/home/gallary11.jpg",
      "/images/home/gallary12.jpg",
      "/images/home/gallary13.jpg",
      "/images/home/gallary14.jpg",
      "/images/home/gallary15.jpg",
      "/images/home/gallary16.jpg",
    ].map((src, index) => (
      <div key={index} className="col-6 col-md-3 mb-4">
        <div className="gallery-image-wrapper">
          <img src={src} alt={`Mehendi Design ${index + 1}`} className="gallery-image" />
        </div>
      </div>
    ))}
  </div>
</div>


      <section className="about-section">
        <div className="container text-center">
          <h2>About Us</h2>
          <p>
            We specialize in traditional and modern Mehendi designs for weddings,
            festivals, and special events. Our professional artists ensure every
            design is unique and stunning.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container text-center">
          <h2>Why Choose Us</h2>
          <ul className="text-start mx-auto" style={{ maxWidth: "800px", lineHeight: "1.8" }}>
            <li>Make your hands more beautiful with our Henna designs.</li>
            <li>I can do henna for any occasion – Bridal Mehendi, Dubai patterns, Parties, Engagements, Birthdays, Baby Showers & all events.</li>
            <li>Get Customized Mehendi available in Pune, Maharashtra.</li>
            <li><strong>Our services include:</strong> Bridal Mehendi, Party Mehendi, Traditional Mehendi, Floral Mehendi, Dubai Pattern, Designer Mehendi.</li>
            <li>We use only the finest and best quality mehendi paste.</li>
            <li>Mehendi is our tradition – part of the total beauty of a bride. No woman feels complete without it.</li>
            <li><strong>Home service available</strong> for your comfort and convenience.</li>
            <li><strong>100% colour guaranteed</strong> with long-lasting results.</li>
            <li><strong>24/7  service</strong> – We’re always here for your special moments.</li>
          </ul>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container text-center">
          <h2>Our Services</h2>
          <div className="row mt-4">
            {[{
              title: "Bridal Mehendi",
              image: "/images/bridaldow.jpg",
              desc: "Exquisite bridal designs to make your special day memorable.",
            },
            {
              title: "Festival Mehendi",
              image: "/images/festival_home.jpg",
              desc: "Celebrate festivals with beautiful and traditional Mehendi art.",
            },
            {
              title: "Custom Designs",
              image: "/images/custom.jpg",
              desc: "Get personalized Mehendi patterns as per your choice.",
            }].map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="service-card">
                  <div className="service-image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="service-image"
                    />
                  </div>
                  <div className="service-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container text-center">
          <h2>Clients Review </h2>
          <div className="testimonial">
            <p>"Absolutely loved my bridal Mehendi! The designs were perfect and detailed."</p>
            <h5>- Ayesha Khan</h5>
          </div>
          <div className="testimonial">
            <p>"Amazing service! Got my festival Mehendi done, and it was stunning."</p>
            <h5>- Priya Sharma</h5>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2>Let's Make Your Occasion Beautiful  </h2>
          <a
            href="https://wa.me/919158844821"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
