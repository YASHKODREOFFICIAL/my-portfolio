import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">

        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            rows="10"
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="send-button" type="submit">
            <div className="alt-send-button">
              <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li><i className="fa fa-map-marker"></i><span className="contact-text">City, State</span></li>
            <li><i className="fa fa-phone"></i><span className="contact-text"><a href="tel:+911234567890">(123) 456-7890</a></span></li>
            <li><i className="fa fa-envelope"></i><span className="contact-text"><a href="mailto:email@example.com">email@example.com</a></span></li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li><a href="#"><i className="fa fa-github"></i></a></li>
            <li><a href="#"><i className="fa fa-codepen"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          </ul>
          <hr />

          <div className="copyright">© ALL OF THE RIGHTS RESERVED</div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
