function About() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <img
                src="/images/new_image/card.jpeg"
                alt="About Najneen Mehendi"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3">Najneen Mehendi Designer</h3>
              <p>
                Welcome to Najneen Mehendi Designer! With over{" "}
                <strong>7+ years of experience</strong>, we specialize in Bridal, Traditional,
                Floral, Dubai, and Designer Mehendi. Our passion for intricate designs and
                customer satisfaction has made us one of the most trusted names in the city.
              </p>
              <ul>
                <li>✅ Over 500+ happy clients</li>
                <li>✅ Customized mehendi designs</li>
                <li>✅ Home service available</li>
                <li>✅ Affordable & timely service</li>
              </ul>
              <p>
                Whether it's a wedding, festival, or special occasion – we make sure your
                hands tell a beautiful story through art.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-section {
          padding: 80px 20px;
          background: linear-gradient(145deg, #00291c, #003f2d);
          color: #fff;
        }

        .about-section h2 {
          font-size: 2.8rem;
          color: #ff9900;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
        }

        .about-section h3 {
          color: #ffcc00;
          font-size: 1.8rem;
          margin-bottom: 15px;
        }

        .about-section p {
          font-size: 1rem;
          line-height: 1.7;
        }

        .about-section ul {
          list-style: none;
          padding-left: 0;
        }

        .about-section ul li {
          padding-left: 25px;
          position: relative;
          margin-bottom: 10px;
        }

        .about-section ul li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #ffcc00;
        }
      `}</style>
    </>
  );
}

export default About;
