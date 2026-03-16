import { useState } from 'react'
import './App.css'
import logo from './assets/img/logo.webp'
import storyImg1 from './assets/img/Screenshot_2026-02-11_at_2.27.56_AM.png'
import storyImg2 from './assets/img/Screenshot_2026-02-11_at_2.29.01_AM.png'
import presaleImg from './assets/img/DSC07756.JPG'
import breadBg from './assets/img/breadbg.jpg'
import bt1 from './assets/img/bt1.jpeg'
import bt2 from './assets/img/bt2.jpeg'
import bt3 from './assets/img/bt3.jpeg'
import menuImg from './assets/img/menu.jpeg'
import heroBg from './assets/new img/home img.jpg'
import galleryImg1 from './assets/img/DSC07756.JPG'
import galleryImg2 from './assets/img/Screenshot_2026-02-11_at_2.27.56_AM.png'
import galleryImg3 from './assets/img/DSC07715.JPG'
import { useEffect } from 'react'
import gridItemsImg from './assets/img/bakery_grid_items.png'
import subscriptionImg from './assets/img/bread_subscription_hero.png'
// Carousel Images
import carouselImg1 from './assets/crousel/24-karat-bakery-carousel-box-01.JPG'
import carouselImg2 from './assets/crousel/24-karat-bakery-carousel-box-02.jpg'
import carouselImg3 from './assets/crousel/24-karat-bakery-carousel-box-03.JPG'
import carouselImg4 from './assets/crousel/24-karat-bakery-carousel-box-04.jpg'
import carouselImg5 from './assets/crousel/24-karat-bakery-carousel-box-05.jpg'
import carouselImg6 from './assets/crousel/24-karat-bakery-carousel-box-06.jpg'
import carouselImg7 from './assets/crousel/24-karat-bakery-carousel-box-07.jpg'
import carouselImg8 from './assets/crousel/24-karat-bakery-carousel-box-08.jpg'
import carouselImg9 from './assets/crousel/24-karat-bakery-carousel-box-09.jpg'
import carouselImg10 from './assets/crousel/24-karat-bakery-carousel-box-10.jpg'
import carouselImg11 from './assets/crousel/24-karat-bakery-carousel-box-11.jpg'
import carouselImg12 from './assets/crousel/24-karat-bakery-carousel-box-12.jpg'

// Store Page Images
import bakedCookieImg from './assets/Store page/24-karat-bakery-product-baked-cookie-dozen.jpg'
import breadClubImg from './assets/Store page/24-karat-bakery-product-bread-club-subscription.jpg'
import cookbookBundleImg from './assets/Store page/24-karat-bakery-product-cookbook-collectors-bundle.jpg'
import cookbookImg from './assets/Store page/24-karat-bakery-product-cookie-pastry-cookbook-founders-edition.jpg'
import deluxePantryImg from './assets/Store page/24-karat-bakery-product-deluxe-pantry-box.jpg'
import hoodieImg from './assets/Store page/24-karat-bakery-product-founders-hoodie.jpg'
import pastryTrioImg from './assets/Store page/24-karat-bakery-product-founders-pastry-box-trio-bundle.jpg'
import pastryBoxImg from './assets/Store page/24-karat-bakery-product-founders-pastry-box.jpg'
import tshirtImg from './assets/Store page/24-karat-bakery-product-founders-t-shirt.jpg'
import frozenCookieImg from './assets/Store page/24-karat-bakery-product-frozen-cookie-dozen-dough.jpg'
import storeGiftcardImg from './assets/Store page/24-karat-bakery-product-giftcard.jpg'
import goldBundleImg from './assets/Store page/24-karat-bakery-product-gold-supporter-bundle.jpg'
import legacyBundleImg from './assets/Store page/24-karat-bakery-product-legacy-bundle.jpg'
import pantryStapleImg from './assets/Store page/24-karat-bakery-product-pantry-staple-box.jpg'
import platinumBundleImg from './assets/Store page/24-karat-bakery-product-platinum-bundle.jpg'
import signatureCookieImg from './assets/Store page/24-karat-bakery-product-signature-cookie-set.jpg'

/**
 * Centered helper for WooCommerce direct checkout
 * @param {string} productId - The ID from WooCommerce Product page
 * @param {number} quantity - Number of items
 */
const redirectToCheckout = (productId, quantity = 1) => {
  const baseUrl = window.location.origin + '/checkout/';
  const params = new URLSearchParams();

  // WooCommerce 'Add to Cart' via URL
  params.append('add-to-cart', productId);
  params.append('quantity', quantity);

  window.location.href = `${baseUrl}?${params.toString()}`;
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className="faq-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <div className="faq-answer-wrapper" style={{ 
        maxHeight: isOpen ? '1000px' : '0', 
        overflow: 'hidden', 
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isOpen ? 1 : 0,
        paddingTop: isOpen ? '15px' : '0'
      }}>
        <div className="faq-answer">{answer}</div>
      </div>
    </div>
  );
};

function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-links left">
          <a href="/presale/">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#ownership">OWNERSHIP</a>
          <a href="#community">COMMUNITY</a>
          <a href="/presale/?view=menu">STORE</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a href="/presale/" className="nav-logo">
          <img src={logo} alt="24 Karat Bakery" />
        </a>

        <div className="nav-links right">
          <a href="#" className="nav-btn giftcard" onClick={() => redirectToCheckout('1934')}>GIFTCARD</a>
          <a href="/presale/?view=menu" className="nav-btn pre-order">PRE ORDER NOW</a>
        </div>

        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="/presale/" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="/presale/?view=menu" onClick={() => setIsMenuOpen(false)}>PRODUCTS</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#ownership" onClick={() => setIsMenuOpen(false)}>OWNERSHIP</a>
          <a href="#community" onClick={() => setIsMenuOpen(false)}>COMMUNITY</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          <a href="/presale/?view=menu" className="mobile-cta" onClick={() => setIsMenuOpen(false)}>PRE ORDER NOW</a>
        </div>
      </div>
    </nav>
  );
}

function ProductSubHeader() {
  return (
    <div id="now-in-season" className="product-sub-header">
      <div className="container">
        <div className="sub-header-content">
          <h2 className="now-in-season">NOW IN SEASON</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search Grocery Pickup & Delivery" />
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </div>
          <div className="cart-total">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
             <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  const products = [
    { id: '1931', name: "FOUNDERS PASTRY BOX", price: "$45.00", desc: "8-10 premium pastries (rotating seasonal selection)", img: gridItemsImg },
    { id: '1933', name: "COOKIE DOZEN COLLECTION", price: "$36.00", desc: "12 artisan cookies (Classic + globally inspired)", img: gridItemsImg },
    { id: '1930', name: "ARTISAN SOURDOUGH LOAF", price: "$12.00", desc: "Fresh daily, organic wheat and natural levain", img: gridItemsImg },
    { id: '1931', name: "FOUNDERS PASTRY BOX", price: "$45.00", desc: "8-10 premium pastries (rotating seasonal selection)", img: gridItemsImg },
    { id: '1933', name: "COOKIE DOZEN COLLECTION", price: "$36.00", desc: "12 artisan cookies (Classic + globally inspired)", img: gridItemsImg },
    { id: '1931', name: "FOUNDERS PASTRY BOX", price: "$45.00", desc: "8-10 premium pastries (rotating seasonal selection)", img: gridItemsImg },
    { id: '1933', name: "COOKIE DOZEN COLLECTION", price: "$36.00", desc: "12 artisan cookies (Classic + globally inspired)", img: gridItemsImg },
    { id: '1930', name: "ARTISAN SOURDOUGH LOAF", price: "$12.00", desc: "Fresh daily, organic wheat and natural levain", img: gridItemsImg },
    { id: '1931', name: "FOUNDERS PASTRY BOX", price: "$45.00", desc: "8-10 premium pastries (rotating seasonal selection)", img: gridItemsImg },
    { id: '1933', name: "COOKIE DOZEN COLLECTION", price: "$36.00", desc: "12 artisan cookies (Classic + globally inspired)", img: gridItemsImg },
    { id: '1931', name: "FOUNDERS PASTRY BOX", price: "$45.00", desc: "8-10 premium pastries (rotating seasonal selection)", img: gridItemsImg },
    { id: '1933', name: "COOKIE DOZEN COLLECTION", price: "$36.00", desc: "12 artisan cookies (Classic + globally inspired)", img: gridItemsImg },
    { id: '1930', name: "ARTISAN SOURDOUGH LOAF", price: "$12.00", desc: "Fresh daily, organic wheat and natural levain", img: gridItemsImg },
    { id: '1931', name: "FOUNDERS PASTRY BOX", price: "$45.00", desc: "8-10 premium pastries (rotating seasonal selection)", img: gridItemsImg },
    { id: '1933', name: "COOKIE DOZEN COLLECTION", price: "$36.00", desc: "12 artisan cookies (Classic + globally inspired)", img: gridItemsImg }
  ];

  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="product-grid">
          {products.map((p, i) => (
            <div key={i} className="product-card">
              <div className="product-image-wrapper">
                <img src={p.img} alt={p.name} />
                <button className="add-to-cart-plus" onClick={() => redirectToCheckout(p.id)}>+</button>
              </div>
              <div className="product-info">
                <span className="product-price">{p.price}</span>
                <h4 className="product-name">{p.name}</h4>
                <p className="product-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BreadSubscriptionSection() {
  return (
    <section id="bread-subscription" className="bread-subscription">
      <div className="container">
        <div className="subscription-flex">
          <div className="subscription-content">
            <h2 className="subscription-title">JOIN OUR<br/>BREAD SUBSCRIPTION</h2>
            
            <div className="program-item">
              <h4>THE YEARLY PROGRAM | $300</h4>
              <p>Get 1 artisan loaf per week for 12 months, plus priority access to limited-edition breads and a Founders Bread Card for VIP pickup.</p>
            </div>

            <div className="program-item">
              <h4>THE HALF-YEAR PASS | $150</h4>
              <p>Perfect for trying us out. Get 1 artisan loaf per week for 6 months.</p>
            </div>

            <button onClick={() => redirectToCheckout('1930')} className="order-now-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              Order Now <span>⟶</span>
            </button>
          </div>
          <div className="subscription-image">
            <img src={subscriptionImg} alt="Artisan Breads" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <header id="hero" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          BAKING FOR CHICAGO AND WE’RE<br />
          JUST GETTING WARMED UP.
        </h1>
        <p className="sub-heading">
          We’re building more than a bakery, we’re creating a community-powered movement rooted
          right here in Chicago. From the first batch to the first storefront, this is your chance to own a
          piece from the beginning. Join us as a founding owner and help shape what rises next.
        </p>
        <a href="#ownership" className="cta-button" style={{ display: 'inline-block', textDecoration: 'none' }}>BECOME A FOUNDER</a>
      </div>
    </header>
  );
}

function Section1() {
  return (
    <section id="products" className="section-bread">
      <div className="container">
        <div className="bread-flex-container">
          <div className="bread-content">
            <h2 className="section-heading">JOIN OUR<br />BREAD CLUB</h2>
            <p className="section-subtext">
              Our sourdough breads are made with water, salt
              and organic wheat, transformed through the
              unhurried magic of fermentation. In a world that
              moves fast, we proudly go slow.
            </p>
            <button
              onClick={() => redirectToCheckout('1930')}
              className="bread-link"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
            >
              Subscribe for fresh bread each week <span className="arrow-span">⟶</span>
            </button>
          </div>
          <div className="bread-grid">
            <div className="bread-card">
              <img src={bt1} alt="Real Bread 1" />
            </div>
            <div className="bread-card">
              <img src={bt2} alt="Real Bread 2" />
            </div>
            <div className="bread-card">
              <img src={bt3} alt="Real Bread 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Section2 = () => {
  const [shares, setShares] = useState(1);

  const sharePrice = 100;

  const total = shares * sharePrice;

  const getTierInfo = (count) => {
    if (count >= 10) {
      return {
        name: "FOUNDING MEMBER",
        perks: [
          "10+ or more co-op shares",
          "Founding member recognition",
          "Annual Strategic Forum Invitation",
          "Private tasting experience",
          "Limited-edition gift",
          "Quarterly wholesale pricing window"
        ]
      };
    } else if (count >= 3) {
      return {
        name: "GOLD MEMBER",
        perks: [
          "3 or more co-op shares",
          "Premium physical member card",
          "Discount on purchases",
          "Exclusive tastings & events",
          "Priority access to new products"
        ]
      };
    } else {
      return {
        name: "COMMUNITY MEMBER",
        perks: [
          "1 or more co-op shares",
          "Lifetime membership",
          "1 vote in community governance",
          "Member-only perks"
        ]
      };
    }
  };

  const tierInfo = getTierInfo(shares);

  const handleCheckout = () => {
    redirectToCheckout('1929', shares);
  };

  const faqs = [
    {
      question: "What is community ownership at 24 Karat Bakery?",
      answer: "24 Karat Bakery is a community-owned cooperative. That means customers, neighbors, and supporters can become owners, not just shoppers. Community ownership helps us keep baking jobs local and fair, invest in quality ingredients and craft, and grow without corporate control."
    },
    {
      question: "What Does It Mean to Be a Community Owner?",
      answer: "As a Community Member, you receive: One vote in community-level co-op decisions, a voice in the future of the bakery, invitations to member events and meetings, eligibility for patronage distributions (if declared), and the pride of supporting a worker-owned local bakery. Ownership is about participation and stewardship, not speculation."
    },
    {
      question: "What Community Ownership Is Not",
      answer: "To be clear and transparent: It is NOT a stock purchase, NOT a guaranteed financial return, NOT a short-term investment, and NOT transferable or resellable. Community ownership is membership equity governed by our bylaws."
    },
    {
      question: "Community Ownership Contribution",
      answer: "One-time ownership contribution: $250. One member = one vote. Additional contributions do not increase voting power. Contributions are recorded as member equity."
    },
    {
      question: "How to Become a Community Owner?",
      answer: "Complete the ownership contribution through our website. You'll receive a welcome email and membership materials. Your membership becomes active once your contribution is received and the membership agreement is acknowledged."
    },
    {
      question: "Prefer to Join In Person?",
      answer: "You can also sign up at our bakery or at farmers markets and community events (after we're open!). Look for the \"Become an Owner\" sign or ask a team member."
    },
    {
      question: "Transparency & Disclosure",
      answer: "Community ownership contributions are membership equity in 24 Karat Bakery Co-op. They are not deposits, donations, or securities, and do not guarantee financial returns. Ownership rights and responsibilities are governed by the co-op's bylaws."
    },
    {
      question: "Questions?",
      answer: "Email us at: hello@24karatbakery.com. We're happy to explain how co-op ownership works."
    }
  ];

  return (
    <section id="ownership" className="founding-member ownership-movement-unified">
      <div className="container">
        <div className="ownership-intro-block">
          <h2 className="section-title text-white anton-font">JOIN THE MOVEMENT, BE A<br />FOUNDING MEMBER AS LOW AS $100</h2>
          <p className="section-description text-white">
            Join us in building a community-owned bakery. By becoming a founding member,
            you’re supporting local food systems, sustainable practices, and a business designed to
            serve its neighbors. Your ownership share connects you to a network of members who
            believe in good bread, fair practices, and a stronger local economy.
          </p>
          <div className="intro-actions">
            <a href="#" className="bylaws-btn">READ THE BYLAWS</a>
          </div>
        </div>

        <div className="tiers-grid">
          <div className="tiers-wrapper">
            <div className="tier-card">
              <div className="tier-header">
                <h3>COMMUNITY MEMBER</h3>
                <span className="share-count">1+ OWNERSHIP SHARE</span>
              </div>
              <div className="tier-body">
                <p className="perks-title">Perks</p>
                <p className="tier-description">For individuals who want to co-own the bakery. Includes:</p>
                <ul className="mockup-perks">
                  <li>1 or more co-op shares</li>
                  <li>Lifetime membership</li>
                  <li>1 vote in community governance</li>
                  <li>Member-only perks</li>
                </ul>
              </div>
              <div className="tier-footer">
                <div className="tier-price">$100</div>
              </div>
            </div>

            <div className="tier-card">
              <div className="tier-header">
                <h3>GOLD MEMBER</h3>
                <span className="share-count">3+ OWNERSHIP SHARE</span>
              </div>
              <div className="tier-body">
                <p className="perks-title">Perks</p>
                <p className="tier-description">For supporters who want deeper involvement. Includes everything from previous tier plus:</p>
                <ul className="mockup-perks">
                  <li>3 or more co-op shares</li>
                  <li>Premium physical member card</li>
                  <li>Discount on purchases</li>
                  <li>Exclusive tastings & events</li>
                  <li>Priority access to new products</li>
                </ul>
              </div>
              <div className="tier-footer">
                <div className="tier-price">$300</div>
              </div>
            </div>

            <div className="tier-card">
              <div className="tier-header">
                <h3>FOUNDING MEMBER</h3>
                <span className="share-count">10+ OWNERSHIP SHARE</span>
              </div>
              <div className="tier-body">
                <p className="perks-title">Perks</p>
                <p className="tier-description">For early leaders and major supporters. Includes everything from previous tier plus:</p>
                <ul className="mockup-perks">
                  <li>10+ or more co-op shares</li>
                  <li>Founding member recognition for the first 100 members</li>
                  <li>Invitation to Annual Strategic Forum with Worker Leadership</li>
                  <li>Private tasting experience</li>
                  <li>Limited-edition gift</li>
                  <li>Quarterly wholesale pricing window</li>
                </ul>
              </div>
              <div className="tier-footer">
                <div className="tier-price">$1000</div>
              </div>
            </div>
          </div>

          <div className="membership-widget">
            <div className="widget-header">
              <span>How many shares<br />would you like to buy?</span>
              <div className="share-inputs">
                <div 
                  className={`share-option ${shares === 1 ? "active" : ""}`}
                  onClick={() => setShares(1)}
                >1</div>
                <div 
                  className={`share-option ${shares === 3 ? "active" : ""}`}
                  onClick={() => setShares(3)}
                >3</div>
                <div 
                  className={`share-option ${shares === 10 ? "active" : ""}`}
                  onClick={() => setShares(10)}
                >10</div>
                
                <div className="custom-share-container keyboard-input">
                  <input
                    type="number"
                    placeholder={shares === 0 || shares === 1 || shares === 3 || shares === 10 ? "+" : ""}
                    value={shares !== 1 && shares !== 3 && shares !== 10 && shares !== 0 ? shares : ""}
                    className={`share-option ${shares !== 1 && shares !== 3 && shares !== 10 && shares !== 0 ? "active" : ""}`}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val)) setShares(val);
                      else setShares(0);
                    }}
                    onFocus={(e) => {
                      if (shares === 1 || shares === 3 || shares === 10) {
                         // Switch to custom mode by clearing presets
                         setShares(0);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="widget-body">
              <div className="tier-badge-mockup">{tierInfo.name} perks</div>
              <div className="scrollable-perks">
                <ul className="cumulative-perks-list">
                  {/* Community Perks */}
                  {shares >= 1 && (
                    <>
                      <li className="perk-category">COMMUNITY PERKS</li>
                      <li>1 or more co-op shares</li>
                      <li>Lifetime membership</li>
                      <li>1 vote in community governance</li>
                      <li>Member-only perks</li>
                    </>
                  )}
                  {/* Gold Perks */}
                  {shares >= 3 && (
                    <>
                      <li className="perk-divider"></li>
                      <li className="perk-category">GOLD PERKS</li>
                      <li>Premium physical member card</li>
                      <li>Discount on purchases</li>
                      <li>Exclusive tastings & events</li>
                      <li>Priority access to new products</li>
                    </>
                  )}
                  {/* Founding Perks */}
                  {shares >= 10 && (
                    <>
                      <li className="perk-divider"></li>
                      <li className="perk-category">FOUNDING PERKS</li>
                      <li>Founding member recognition (first 100)</li>
                      <li>Annual Strategic Forum access</li>
                      <li>Private tasting experience</li>
                      <li>Limited-edition gift</li>
                      <li>Quarterly wholesale pricing window</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="widget-footer">
              <div className="total-row">
                <span>Total:</span>
                <span className="total-price">${total}{total >= 1000 ? '+' : ''}</span>
              </div>
              <button className="checkout-btn-mockup" onClick={handleCheckout}>Checkout</button>
              <p className="community-note-mockup">2.5% of your purchase goes back into our community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section (Merged & Accordion) */}
      <div className="faq-section-new">
        <div className="container">
          <h2 className="faq-main-title anton-font">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Section3 = () => {
  return (
    <section id="community" className="waitlist-section ownership-movement">
      <div className="container">
        <div className="waitlist-flex">
          <div className="waitlist-content">
            <h2 className="section-title">JOIN THE MOVEMENT, BE A<br />FOUNDING MEMBER AS LOW AS $100</h2>
            <p className="section-description">
              Join us in building a community-owned bakery. By becoming a founding member,
              you’re supporting local food systems, sustainable practices, and a business designed to
              serve its neighbors. Your ownership share connects you to a network of members who
              believe in good bread, fair practices, and a stronger local economy.
            </p>
            <a href="#" className="bylaws-btn">READ THE BYLAWS</a>
          </div>

          <div className="waitlist-card">
            <h3>JOIN OUR WAITLIST!</h3>
            <div className="form-group">
              <p className="select-label">SELECT ALL THAT SOUNDS LIKE YOU:</p>
              <label className="checkbox-label">
                <input type="checkbox" /> I want to be a customer in a new neighborhood
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> I want to help organize a co-op in my area
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> I am a baker/entrepreneur looking to co-own a location
              </label>
            </div>

            <div className="input-row">
              <div className="input-field">
                <label>FIRST NAME</label>
                <input type="text" />
              </div>
              <div className="input-field">
                <label>LAST NAME</label>
                <input type="text" />
              </div>
            </div>

            <div className="input-field">
              <label>EMAIL</label>
              <input type="email" />
            </div>

            <div className="input-field">
              <label>ZIPCODE</label>
              <input type="text" />
            </div>

            <button className="submit-btn">SUBMIT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section4 = () => {
  return (
    <section id="about" className="story-section">
      <div className="container">
        <div className="story-flex">
          <div className="story-images">
            <img src={storyImg1} alt="Bakery Window" loading="lazy" />
            <img src={storyImg2} alt="Bakery Event" loading="lazy" />
          </div>
          <div className="story-content">
            <h2 className="section-title">
              COMMUNITY ROOTED,<br />
              FUTURE OWNED
            </h2>
            <p className="section-description">
              From our beginnings in Chicago, 24 Karat Bakery Co-op was built on a simple idea:
              good food, good jobs, and shared ownership should grow together. Today, we create
              opportunity, empower worker-owners, and bring neighbors together through food that
              nourishes both people and community.
            </p>
            <a href="#" className="story-link">Our story ———</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section5 = () => {
  const carouselImages = [
    carouselImg1, carouselImg2, carouselImg3, carouselImg4,
    carouselImg5, carouselImg6, carouselImg7, carouselImg8,
    carouselImg9, carouselImg10, carouselImg11, carouselImg12
  ];

  // Double the images for seamless infinite scroll
  const allImages = [...carouselImages, ...carouselImages];

  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">ABOUT 24KARAT BAKERY</h2>
        <div className="about-content">
          <p>
            At 24 Karat Bakery, we bring together a fresh artisan bakery, a year-round indoor
            farmers market, and a community-owned co-op under one roof. We bake breads, pastries,
            and coffee daily, provide a permanent space for local food producers to sell their goods,
            and offer shared ownership that empowers our neighbors to grow with us.
          </p>
          <button className="discover-btn">DISCOVER MORE</button>
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {allImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Bakery Scene ${index + 1}`}
              className={`carousel-image ${index % 2 === 0 ? 'horizontal' : 'vertical'}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Section6 = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-flex">
          <div className="contact-content">
            <h2 className="section-title">WE WANT TO<br />HEAR FROM YOU</h2>
            <p className="section-description">
              We’d love to hear from you! Whether you’re a customer, worker, entrepreneur,
              or community supporter; you’re part of what makes our bakery co-op possible.
            </p>
          </div>
          <div className="contact-form-card">
            <div className="form-header">
              <h3>CONTACT US!</h3>
              <p className="interest-label">I’M INTERESTED IN:</p>
              <div className="interest-options">
                <label className="checkbox-item">
                  <input type="checkbox" /> Becoming an Owner
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" /> Working in the Bakery
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" /> Selling my Products/Partnering
                </label>
              </div>
            </div>

            <div className="input-row">
              <div className="input-field">
                <label>FIRST NAME</label>
                <input type="text" />
              </div>
              <div className="input-field">
                <label>LAST NAME</label>
                <input type="text" />
              </div>
            </div>
            <div className="input-field">
              <label>COMPANY (FOR BUSINESS)</label>
              <input type="text" />
            </div>
            <div className="input-field">
              <label>EMAIL</label>
              <input type="email" />
            </div>
            <div className="input-field">
              <label>SUBJECT</label>
              <input type="text" />
            </div>
            <div className="input-field">
              <label>MESSAGE</label>
              <textarea rows="4"></textarea>
            </div>
            <button className="send-btn">SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const NowInSeasonSection = () => {
  const categories = [
    {
      title: "SIGNATURE BAKERY COLLECTIONS",
      items: [
        {
          id: '1931',
          name: "Founders Pastry Box",
          price: "$45",
          img: pastryBoxImg,
          perks: ["8–10 premium pastries (rotating seasonal selection)", "Exclusive flavors only for presale supporters", "Luxury gold-accent packaging"]
        },
        {
          id: '1931', // Trio Bundle ID placeholder
          name: "Founders Pastry Box Trio Bundle",
          price: "$120",
          img: pastryTrioImg,
          perks: ["3 pastry boxes (perfect for gifting or events)"]
        },
        {
          id: '1933',
          name: "Baked Cookie Dozen",
          price: "$36",
          img: bakedCookieImg,
          perks: ["12 artisan cookies", "Mix of classic + globally inspired flavors"]
        },
        {
          id: '1933', // Frozen ID placeholder
          name: "Frozen Cookie Dough Dozen",
          price: "$36",
          img: frozenCookieImg,
          perks: ["12 ready-to-bake dough portions", "Bake fresh at home anytime"]
        },
        {
          id: '1933', // Set ID placeholder
          name: "Signature Cookie Set",
          price: "$75",
          img: signatureCookieImg,
          perks: ["24 cookies (baked or dough)", "Limited-edition flavors + gold packaging"]
        },
        {
          id: '1930',
          name: "Weekly Bread Subscription",
          price: "$300",
          img: breadClubImg,
          perks: ["1 artisan loaf per week for 12 months", "Priority access to limited breads", "Founders Bread Card (VIP pickup)"]
        },
        {
          id: '1930', // Half year ID placeholder
          name: "Half-Year Bread Pass",
          price: "$150",
          img: breadClubImg,
          perks: ["1 loaf per week for 6 months"]
        }
      ]
    },
    {
      title: "PANTRY & HOME COLLECTION",
      items: [
        {
          id: 'pantry1',
          name: "Pantry Staple Box",
          price: "$95",
          img: pantryStapleImg,
          perks: ["House-made granola", "Signature jam or honey butter", "Specialty flour blend", "Spiced sugar or salt blend", "Recipe card set"]
        },
        {
          id: 'pantry2',
          name: "Deluxe Pantry Box",
          price: "$180",
          img: deluxePantryImg,
          perks: ["Everything above + bonus seasonal items"]
        }
      ]
    },
    {
      title: "LIMITED-EDITION MERCH",
      items: [
        {
          id: 'merch1',
          name: "Founders T-Shirt",
          price: "$35",
          img: tshirtImg,
          perks: ["Heavyweight premium cotton", "Minimal gold logo design", "Founders Edition"]
        },
        {
          id: 'merch2',
          name: "Founders Hoodie",
          price: "$85",
          img: hoodieImg,
          perks: ["Luxury fleece hoodie", "Embroidered 24 Karat logo", "Limited-run numbering"]
        },
        {
          id: 'merch3',
          name: "24 Karat Cookie & Pastry Cookbook",
          price: "$40",
          img: cookbookImg,
          perks: ["Founders Edition (20-30 recipes)", "Global cookie & pastry concepts", "Co-op story + behind-the-scenes", "Signed digital edition included"]
        },
        {
          id: 'merch4',
          name: "Collector’s Bundle",
          price: "$80",
          img: cookbookBundleImg,
          perks: ["Printed cookbook + pastry box + cookie dozen"]
        }
      ]
    },
    {
      title: "BUNDLES (BEST VALUE)",
      isBundle: true,
      items: [
        {
          id: 'bundle1',
          name: "Gold Supporter Bundle",
          price: "$150",
          img: goldBundleImg,
          perks: ["Pastry box", "Founders t-shirt", "Cookie dozen (baked or dough)"]
        },
        {
          id: 'bundle2',
          name: "Platinum Bundle",
          price: "$350",
          img: platinumBundleImg,
          perks: ["Bread for 6 months", "Pantry staple box", "Founders hoodie", "Pastry box"]
        },
        {
          id: 'bundle3',
          name: "Legacy Bundle",
          price: "$750",
          img: legacyBundleImg,
          perks: ["Bread for a year", "Deluxe pantry box", "Hoodie + t-shirt", "Cookbook", "Signature cookie set", "VIP Founders recognition"]
        }
      ]
    }
  ];

  return (
    <section id="now-in-season" className="now-in-season-grid-section">
      <div className="container">
        <h2 className="section-title-new">NOW IN SEASON - PHYSICAL MERCH EDITION</h2>
        {categories.map((cat, idx) => (
          <div key={idx} className={`menu-category-block ${cat.isBundle ? 'bundles-category' : ''}`}>
            <h3 className="category-title-main">{cat.title}</h3>
            <div className="products-grid-new">
              {cat.items.map((item, i) => (
                <div key={i} className="product-card-new">
                  <div className="product-img-frame">
                    <img src={item.img} alt={item.name} loading="lazy" />
                  </div>
                  <div className="product-details-new">
                    <h4 className="p-name">{item.name}</h4>
                    <span className="p-price">{item.price}</span>
                    <ul className="p-perks">
                      {item.perks.map((perk, pIdx) => (
                        <li key={pIdx}>• {perk}</li>
                      ))}
                    </ul>
                    <button 
                      className="order-btn-new"
                      onClick={() => redirectToCheckout(item.id)}
                    >
                      ORDER ONLINE <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Section7 = () => {
  return (
    <section className="presale-menu-section">
      <div className="container">
        <div className="presale-flex">
          <div className="presale-image">
            <img src={menuImg} alt="Bakery Presale Menu Items" loading="lazy" />
          </div>
          <div className="presale-content">
            <h2 className="section-title">24 KARAT BAKERY<br />PRESALE MENU</h2>
            <p className="presale-intro">
              Every item below is a real product you'll receive after launch. Your support funds equipment, licensing, ingredients, and our first production runs. All items are limited-run Founders Editions — once they're gone, they're gone.
            </p>

            <div className="menu-category">
              <h4 className="category-title">SIGNATURE BAKERY COLLECTIONS</h4>
              <div className="menu-item-row">
                <h5>FOUNDERS PASTRY BOX | $45</h5>
                <button
                  onClick={() => redirectToCheckout('1931')}
                  className="order-link"
                >
                  Order Online <span>→</span>
                </button>
              </div>
              <p className="item-desc">
                8-10 premium pastries (rotating seasonal selection)<br />
                Exclusive flavors only for presale supporters<br />
                Luxury gold-accent packaging
              </p>
            </div>

            <div className="menu-category">
              <h4 className="category-title">COOKIE DOZEN COLLECTION</h4>
              <div className="menu-item-row">
                <h5>BAKED COOKIE DOZEN | $36</h5>
                <button
                  onClick={() => redirectToCheckout('1933')}
                  className="order-link"
                >
                  Order Online <span>→</span>
                </button>
              </div>
              <p className="item-desc">
                12 artisan cookies<br />
                Classic + globally inspired flavors
              </p>
            </div>

            <div className="menu-category">
              <h4 className="category-title">BREAD FOR A YEAR PROGRAM (LIMIT 50)</h4>
              <div className="menu-item-row">
                <h5>WEEKLY BREAD SUBSCRIPTION | $300</h5>
                <button
                  onClick={() => redirectToCheckout('1930')}
                  className="order-link"
                >
                  Order Online <span>→</span>
                </button>
              </div>
              <p className="item-desc">
                1 artisan loaf per week for 12 months<br />
                Priority access to limited breads<br />
                Founders Bread Card (VIP pickup)
              </p>
            </div>

            <button className="view-more-btn" onClick={() => window.location.href = '/presale/?view=menu'}>VIEW MORE OPTIONS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is 24 Karat Bakery?",
      answer: "At 24 Karat Bakery, our mission is to establish a collaborative environment that empowers self-driven bakers and like-minded individuals to work alongside co-owners. We are dedicated to fostering both teamwork and individual growth within our community."
    },
    {
      question: "How does a co-op work?",
      answer: "A co-op is owned and operated by its workers and community members, who make decisions democratically and share in any profits. Unlike traditional businesses, co-ops prioritize fair wages, ethical practices, and community benefit over maximizing profits. This model allows customers to support a business that aligns with their values and actively contributes to the community."
    },
    {
      question: "What type of cuisine will 24 Karat Bakery offer?",
      answer: "We believe the cuisine should authentically represent our community, bringing together ingredients from around the world. By highlighting seasonal flavors from diverse countries and regions, we aim to create a vibrant culinary experience."
    },
    {
      question: "Where will the bakery be located?",
      answer: "Our location will be in Chicago, with plans to establish ourselves near the Lincoln Park area. While the exact address is yet to be determined, this vibrant neighborhood aligns with our vision."
    },
    {
      question: "This sounds awesome! How can I get involved?",
      answer: "If our vision resonates with you, we invite you to join us by signing up under the \"Become an Owner\" tab. Our goal is to gather at least 100 enthusiastic members. If you have unique skills to contribute or are interested in a position on our board, we’d love to hear from you! We’re specifically looking for bakers, baristas, and dedicated customers to help bring this project to life."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#372720" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-banner" style={{ backgroundImage: `url(${breadBg})` }}>
        <h2 className="banner-text">BREAK BREAD, MAKE PEACE!</h2>
      </div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column left">
            <h4 className="column-title">SIGNATURE BAKERY COLLECTIONS</h4>
            <div className="footer-nav">
              <a href="#hero">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#ownership">OWNERSHIP</a>
              <a href="#community">COMMUNITY</a>
              <a href="#products">PRODUCTS</a>
              <a href="#">GIFTCARD</a>
              <a href="#contact">CONTACT</a>
            </div>
            <div className="footer-contact-info">
              <p className="copyright">© 24 Karat Bakery 2026</p>
              <p className="address">2121 Ulster Avenue Lake Katrine, NY 12449</p>
              <div className="operating-hours">
                <p>Boiceville & Woodstock Hours: Fri–Mon 7–5pm | Tue–Thu 7–3pm</p>
                <p>Rhinebeck Hours: Sun–Mon 7–5pm</p>
              </div>
            </div>
          </div>
          <div className="footer-column right">
            <h4 className="column-title">FOLLOW US</h4>
            <div className="newsletter-section">
              <h5>JOIN OUR NEWSLETTER</h5>
              <p>Subscribe to our newsletter to get the latest news on 24 Karat Bakery.</p>
              <div className="subscribe-form">
                <input type="email" placeholder="Email Address" />
                <button className="subscribe-btn">
                  Subscribe <span>→</span>
                </button>
              </div>
            </div>
            <div className="footer-brand">
              <img src={logo} alt="24 Karat Bakery Logo" className="footer-logo-img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState('home');

  useEffect(() => {
    const handleView = () => {
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash;
      // If ?view=menu is present OR we are targeting the season section, show menu view
      if (params.get('view') === 'menu' || hash === '#now-in-season') {
        setView('menu');
      } else {
        setView('home');
      }
    };

    handleView(); // Initial check
    window.addEventListener('hashchange', handleView);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleView);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (view === 'menu') {
    console.log("V2 - Menu View Loaded");
    return (
      <div className="app menu-view">
        <Navbar isScrolled={isScrolled} />
        <NowInSeasonSection />
        <FAQSection />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app home-view">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App
