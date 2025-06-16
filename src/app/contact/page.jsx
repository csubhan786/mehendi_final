"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import 'animate.css';

const MySwal = withReactContent(Swal);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const ADMIN_WEBHOOK_URL = process.env.NEXT_PUBLIC_ADMIN_WEBHOOK_URL;
  const CLIENT_WEBHOOK_URL = process.env.NEXT_PUBLIC_CLIENT_WEBHOOK_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name)) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid name!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid 10-digit phone number!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      return;
    }

    if (!formData.message.trim()) {
      MySwal.fire({
        icon: 'warning',
        title: 'Wait!',
        text: 'Message cannot be empty.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      return;
    }

    const message = `
📥 **New Mehendi Booking**
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
✉️ Email: ${formData.email}
📝 Message: ${formData.message}
`;

    try {
      await axios.post(ADMIN_WEBHOOK_URL, { content: message });
      await axios.post(CLIENT_WEBHOOK_URL, { content: message });

      MySwal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message has been delivered successfully.',
        confirmButtonColor: '#ff9900',
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut'
        }
      });

      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Failed!',
        text: 'Something went wrong. Please try again.',
        showClass: {
          popup: 'animate__animated animate__shakeX'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      console.error(error);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="text-center mb-5">Get in Touch</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>Contact Information</h4>
            <p><strong>Phone:</strong> +91 9158844821</p>
            <p><strong>Email:</strong> najneenchaudhari3@gmail.com</p>
            <p><strong>Address:</strong> Pune, Maharashtra</p>
          </div>
          <div className="col-md-6">
            <h4>Send us a message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  className="form-control"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-warning w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-section {
          padding: 80px 0;
          background-color: #002a20;
          color: #f0f0f0;
        }
        .contact-section h2 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ff9900;
          text-align: center;
          margin-bottom: 3rem;
        }
        .contact-section h4 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #ffcc33;
        }
        .form-control {
          background-color: #003322;
          border: 1px solid #666;
          color: #fff;
          padding: 10px;
          border-radius: 4px;
          font-size: 1rem;
        }
        .btn {
          background-color: #ff9900;
          color: #000;
          font-weight: 600;
          padding: 12px 0;
          border-radius: 4px;
          font-size: 1.1rem;
        }
        input::placeholder,
        textarea::placeholder {
          color: #ffffff;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
