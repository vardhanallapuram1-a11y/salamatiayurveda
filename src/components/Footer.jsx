import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => (
  <footer className="site-footer" id="contact">

    <div className="footer-main">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Column with Logo */}
          <div className="footer-brand">
            <Link to="/">
              <img
                src={logo}
                alt="Salamati Ayurveda"
              />
            </Link>
            <p>
              Salamati Ayurveda brings the timeless wisdom of traditional healing to your doorstep.
              We are dedicated to providing 100% pure Ayurvedic solutions.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61586279880195" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/salamatiayurveda8/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
              <a href="https://www.youtube.com/@SalamatiAyurveda/featured" target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
            </div>
          </div>

          {/* Footer Menu — Internal Links */}
          <div className="footer-col">
            <h4>Footer Menu</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/my-account">Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Useful Links — Internal Links */}
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
              <li><Link to="/refund-returns">Cancellation and Refund</Link></li>
              <li><Link to="/shipping-and-delivery">Shipping and Delivery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Information</h4>
            <div className="footer-contact-item">
              <span>Johripur Delhi - 110094</span>
            </div>
            <div className="footer-contact-item">
              <a href="tel:+917428526936" style={{ color: 'rgba(255,255,255,0.7)' }}>+91 7428526936</a>
            </div>
            <div className="footer-contact-item">
              <a href="mailto:ayurvedasalamati@gmail.com" style={{ color: 'rgba(255,255,255,0.7)' }}>ayurvedasalamati@gmail.com</a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        © {new Date().getFullYear()} Salamati Ayurveda. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
