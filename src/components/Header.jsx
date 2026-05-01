import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

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
          <Link to="/checkout" className="header-cart-icon" style={{ position: 'relative', marginLeft: '15px' }}>
            <ShoppingCart size={24} color="#fff" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
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
        <Link
          to="/checkout"
          className={isActive('/checkout') ? 'active' : ''}
          onClick={() => setMenuOpen(false)}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          Cart
          {cartCount > 0 && (
            <span style={{ 
              background: 'var(--gold-btn)', 
              color: '#000', 
              padding: '2px 8px', 
              borderRadius: '20px', 
              fontSize: '14px',
              fontWeight: '700'
            }}>
              {cartCount} Items
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
