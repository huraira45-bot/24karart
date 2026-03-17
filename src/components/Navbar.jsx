import { useState } from 'react';
import logo from '../assets/img/logo.webp';
import { redirectToCheckout } from '../utils/checkout';
import '../styles/Navbar.css';

function Navbar({ isScrolled, cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-links left">
          <a href="./">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#ownership">OWNERSHIP</a>
          <a href="#community">COMMUNITY</a>
          <a href="?view=menu">STORE</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a href="./" className="nav-logo">
          <img src={logo} alt="24 Karat Bakery" />
        </a>

        <div className="nav-links right">
          <a href="#" className="nav-btn giftcard" onClick={() => redirectToCheckout('1934')}>GIFTCARD</a>
          <a href="#" className="nav-cart" onClick={(e) => { e.preventDefault(); onCartClick(); }}>
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </a>
          <a href="?view=menu" className="nav-btn pre-order">PRE ORDER NOW</a>
        </div>

        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="./" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="?view=menu" onClick={() => setIsMenuOpen(false)}>PRODUCTS</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#ownership" onClick={() => setIsMenuOpen(false)}>OWNERSHIP</a>
          <a href="#community" onClick={() => setIsMenuOpen(false)}>COMMUNITY</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          <a href="?view=menu" className="mobile-cta" onClick={() => setIsMenuOpen(false)}>PRE ORDER NOW</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
