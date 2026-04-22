import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => (
  <footer className="site-footer" id="contact">

    <div className="footer-trust">
      <div className="container">
        <div className="footer-trust-inner">
          <div className="trust-item">
            <svg viewBox="0 0 64 64" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="24" width="36" height="22" rx="2" strokeWidth="2" stroke="#fff"/>
              <path d="M40 32h10l8 10v8H40V32z" strokeWidth="2" stroke="#fff"/>
              <circle cx="16" cy="50" r="5" strokeWidth="2" stroke="#fff"/>
              <circle cx="48" cy="50" r="5" strokeWidth="2" stroke="#fff"/>
            </svg>
            <span>Free Shipping</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 64 64" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 32a20 20 0 0 1 40 0" strokeWidth="2" stroke="#fff"/>
              <rect x="4" y="30" width="8" height="16" rx="4" strokeWidth="2" stroke="#fff"/>
              <rect x="52" y="30" width="8" height="16" rx="4" strokeWidth="2" stroke="#fff"/>
            </svg>
            <span>Online Support</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 64 64" strokeLinecap="round" strokeLinejoin="round">
              <path d="M32 4 L56 14 L56 36 Q56 52 32 60 Q8 52 8 36 L8 14 Z" strokeWidth="2" stroke="#fff"/>
            </svg>
            <span>99% Guarantee</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 64 64" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 8h4l12 36h32l8-28H16" strokeWidth="2" stroke="#fff"/>
              <circle cx="26" cy="52" r="5" strokeWidth="2" stroke="#fff"/>
              <circle cx="50" cy="52" r="5" strokeWidth="2" stroke="#fff"/>
            </svg>
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>

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
