"use client";

import { useState } from "react";
//import Footer from "../components/Footer";

const servicesData = [
  { title: 'Bridal Mehendi', folder: 'bridal', images: 10 },
  { title: 'Party Mehendi', folder: 'party', images: 10 },
  { title: 'Traditional Mehendi', folder: 'traditional', images: 10 },
  { title: 'Floral Mehendi', folder: 'floral', images: 10 },
  { title: 'Dubai Pattern', folder: 'dubai', images: 10 },
  { title: 'Designer Mehendi', folder: 'designer', images: 10 },
];

function Services() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="services-section">
        <div className="custom-container text-center">
          <h2 className="mb-4">Our Services</h2>

          {servicesData.map((service, index) => (
            <div key={index} className="service-box mb-5">
              <h3 className="mb-3">{service.title}</h3>
              <div className="row justify-content-center">
                {[...Array(service.images)].map((_, imgIndex) => {
                  const imgSrc = `/images/${service.folder}/${imgIndex + 1}.jpg`;
                  return (
                    <div className="col-6 col-md-4 col-lg-3 mb-4" key={imgIndex}>
                      <div className="img-container" onClick={() => setSelectedImage(imgSrc)}>
                        <img
                          src={imgSrc}
                          alt={`${service.title} ${imgIndex + 1}`}
                        />
                        <div className="img-overlay">{service.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="Zoomed" />
        </div>
      )}



      <style>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #003322;
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }

        .services-section {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.05));
          padding: 80px 0px;
          border-radius: 20px;
          margin: 0px auto;
          max-width: 1300px;
          color: #fff;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(6px);
        }

        .services-section h2 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ff6a00;
          margin-bottom: 50px;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
          letter-spacing: 1px;
        }

        .service-box {
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          margin-bottom: 60px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
        }

        .services-section h3 {
          font-size: 2rem;
          font-weight: 600;
          margin-top: 40px;
          margin-bottom: 25px;
          color: #ffcc00;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          display: inline-block;
          padding-bottom: 10px;
          position: relative;
        }

        .services-section h3::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #ff6a00, #ffcc00);
          border-radius: 2px;
        }

        .custom-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }

        .services-section .img-container {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .services-section .img-container:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 25px rgba(255, 255, 255, 0.2);
        }

        .services-section .img-container img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          border-radius: 15px;
        }

        .services-section .img-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          padding: 8px 12px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .services-section .img-container:hover .img-overlay {
          opacity: 1;
        }

        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          cursor: zoom-out;
        }

        .image-modal img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(255, 255, 255, 0.3);
          transition: transform 0.3s ease;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 40px;
          font-size: 3rem;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          z-index: 1000;
        }

        @media (max-width: 768px) {
          .services-section h2 {
            font-size: 2.2rem;
          }

          .services-section h3 {
            font-size: 1.5rem;
          }

          .services-section .img-container img {
            height: 180px;
          }
        }

        @media (max-width: 576px) {
          .services-section .img-container img {
            height: 160px;
          }
        }
      `}</style>
    </>
  );
}

export default Services;
