"use client";

//import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const slideshowImages = [
  { src: "/images/insta/112.webp", name: "Bridal Design 1" },
  { src: "/images/insta/2.webp", name: "Bridal Design 2" },
  { src: "/images/insta/f2.webp", name: "Festival Mehendi 1" },
];

const gridImages = [
  { src: "/images/new_image/festival.jpg", name: "Festival Mehendi" },
  { src: "/images/new_image/pexels-.jpg", name: "Custom Mehendi" },
  { src: "/images/new_image/pexels1.jpg", name: "Custom Mehendi" },
  { src: "/images/new_image/bridal(2).jpg", name: "Bridal Design" },
  { src: "/images/new_image/fest1.jpg", name: "Festival Mehendi" },
  { src: "/images/new_image/custom.jpg", name: "Custom Mehendi" },
  { src: "/images/new_image/bridalg.jpg", name: "Bridal Design" },
  { src: "/images/new_image/leg.jpg", name: "Bridal Design" },
];

const Gallery = () => {
  return (
    <>
      <div className="gallery-container text-center">
        <h2 className="gallery-title">Our Mehendi Gallery</h2>
        <p className="gallery-subtitle">Explore our finest designs for every occasion.</p>

        {/* Slideshow Section */}
        <Carousel className="gallery-carousel" interval={2500} pause={false} fade>
          {slideshowImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100 carousel-image" src={image.src} alt={image.name} />
              <Carousel.Caption>
                <h3>{image.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Image Grid Section */}
        <div className="image-grid mt-4">
          {gridImages.map((image, index) => (
            <div key={index} className="image-card">
              <img src={image.src} alt={image.name} className="grid-image" />
              <p className="image-title">{image.name}</p>
            </div>
          ))}
        </div>
      </div>

      

      <style jsx>{`
        :global(body) {
          background: linear-gradient(to bottom, #0b3d2e, #000);
          color: white;
          font-family: "Poppins", sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .gallery-container {
          padding: 60px 20px 40px;
          min-height: 100vh;
          text-align: center;
        }

        .gallery-title {
          font-size: 3rem;
          font-weight: bold;
          color: #ff9d00;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px #000;
        }

        .gallery-subtitle {
          font-size: 1.2rem;
          color: #ccc;
          margin-bottom: 30px;
        }

        .gallery-carousel {
          max-width: 800px;
          margin: 30px auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(255, 157, 0, 0.3);
        }

        .carousel-image {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        :global(.carousel-caption h3) {
          background: rgba(0, 0, 0, 0.7);
          display: inline-block;
          padding: 6px 16px;
          border-radius: 10px;
          color: #ffcc80;
          font-size: 1.4rem;
          text-shadow: 1px 1px 3px #000;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
          margin-top: 50px;
          padding: 0 20px;
        }

        .image-card {
          background-color: rgba(0, 0, 0, 0.5);
          border: 2px solid #ff9d00;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(255, 140, 0, 0.4);
        }

        .grid-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .image-title {
          padding: 12px;
          font-size: 1.1rem;
          font-weight: bold;
          color: #fff;
          background-color: #111;
          border-top: 2px solid #ff9d00;
        }

        :global(.footer-section) {
          background: #000;
          color: #ccc;
          padding: 30px 20px;
          margin-top: 80px;
          text-align: center;
          border-top: 1px solid #333;
        }

        :global(.footer-section .footer-link) {
          color: #ff9d00;
          text-decoration: none;
        }

        :global(.footer-section .footer-link:hover) {
          text-decoration: underline;
        }

        :global(.social-icons) {
          margin-top: 10px;
        }

        :global(.social-icons img) {
          width: 32px;
          height: 32px;
          margin: 0 10px;
          transition: transform 0.3s ease;
        }

        :global(.social-icons img:hover) {
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default Gallery;
