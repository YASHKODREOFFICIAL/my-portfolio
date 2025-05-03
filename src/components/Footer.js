import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section appear">
      <h2 className="section-heading">Contact Me</h2>
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p className="footer-note">© 2025 Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
