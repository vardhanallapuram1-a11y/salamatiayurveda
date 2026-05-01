import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Our Products', path: '/products', dropdown: true },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Home Remedies', path: '/home-remedies' },
  ];

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Salamati Ayurveda Pvt Ltd" />
          </Link>
        </div>
        <nav className="header-nav">
          {links.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={isActive(l.path) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}{l.dropdown && <span className="dropdown-icon"> ▼</span>}
            </Link>
          ))}
        </nav>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <Link
            key={l.path}
            to={l.path}
            className={isActive(l.path) ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
