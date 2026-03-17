import logo from '../assets/img/logo.webp';
import breadBg from '../assets/img/breadbg.jpg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-banner" style={{ backgroundImage: `url(${breadBg})` }}>
        <h2 className="banner-text">BREAK BREAD, MAKE PEACE!</h2>
      </div>
      <div className="footer-grid">
        <div className="footer-column left">
          <h4 className="column-title">SIGNATURE BAKERY COLLECTIONS</h4>
          <div className="footer-nav">
            <a href="#hero">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#ownership">OWNERSHIP</a>
            <a href="#community">COMMUNITY</a>
            <a href="?view=menu">PRODUCTS</a>
            <a href="#contact">CONTACT</a>
          </div>
          <div className="footer-contact-info">
            <p className="copyright">© 24 Karat Bakery 2026</p>
            <p className="address">820 N Orleans St. Chicago, IL 60610</p>
            <div className="operating-details">
              <p>Pre-orders & subscriptions: Open Weekly</p>
              <p>Farmers markets: Follow us on Instagram to Stay Updated</p>
              <p>Pickup: By Scheduled Time</p>
            </div>
          </div>
        </div>
        <div className="footer-column right">
          <h4 className="column-title">FOLLOW US</h4>
          <div className="newsletter-section">
            <h5 className="newsletter-title">JOIN OUR NEWSLETTER</h5>
            <p className="newsletter-desc">Subscribe to our newsletter to get the latest news on 24 Karat Bakery.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Email Address" />
              <button className="subscribe-btn" onClick={() => window.open('https://mailchimp.com', '_blank')}>
                Subscribe <span>→</span>
              </button>
            </div>
          </div>
          <div className="footer-brand">
            <img src={logo} alt="24 Karat Bakery Logo" className="footer-logo-img" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
