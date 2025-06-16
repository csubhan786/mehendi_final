import React from "react";
import "../styles/Footer.css"; // optional: if you want separate footer styles

function Footer() {
  return (
    <footer className="footer-section bg-dark text-light py-4 text-center">
      <div className="container">
        <p>
          Contact us at:{" "}
          <a href="mailto:najneenchaudhari3@gmail.com" className="footer-link text-light">
          najneenchaudhari3@gmail.com
          </a>
        </p>
        <p>Follow us on Instagram & Facebook</p>
        <div className="social-icons d-flex justify-content-center gap-3 mt-2">
          <a href="https://www.instagram.com/najneenmehendi1996?igsh=N3FjdHloZnMxY3Bj" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" height="30" />
          </a>
          <a href="https://facebook.com/share/15vrynyjbs/" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" height="30" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
