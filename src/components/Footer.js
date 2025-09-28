import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="lemonlogo.png" alt="Little Lemon Logo" className="footer-logo" />
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/order">Order Now</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
