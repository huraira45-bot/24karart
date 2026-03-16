import { useState } from 'react'
import './App.css'
import logo from './assets/img/logo.webp'
import storyImg1 from './assets/com/24-karat-bakery-community-rooted.JPG'
import storyImg2 from './assets/com/24-karat-bakery-community-rooted-02.jpg'
import presaleImg from './assets/img/DSC07756.JPG'
import breadBg from './assets/img/breadbg.jpg'
import bt1 from './assets/img/bt1.jpeg'
import bt2 from './assets/img/bt2.jpeg'
import bt3 from './assets/img/bt3.jpeg'
import menuImg from './assets/PRESALEMENU/24-karat-bakery-presale-menu.jpg'
import heroBg from './assets/new img/home img.jpg'
import galleryImg1 from './assets/img/DSC07756.JPG'
import galleryImg2 from './assets/img/Screenshot_2026-02-11_at_2.27.56_AM.png'
import galleryImg3 from './assets/img/DSC07715.JPG'
import { useEffect, useMemo } from 'react'
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

const allProducts = [
  {
    id: '1936',
    name: "BAKED COOKIE DOZEN",
    price: "$36",
    img: bakedCookieImg,
    category: "Now In Season",
    description: "● 12 artisan cookies\n● Mix of classic + globally inspired flavors",
    productDetails: "A dozen handcrafted artisan cookies made with premium ingredients and careful technique. Each box features a mix of classic favorites and globally inspired flavors that rotate throughout the year. These cookies are baked fresh in small batches to deliver the perfect balance of crisp edges and soft centers. Ideal for sharing, gifting, or enjoying with a great cup of coffee.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "yes",
    delivery: "above orders of $80"
  },
  {
    id: '1943',
    name: "FROZEN COOKIE DOUGH DOZEN",
    price: "$36",
    img: frozenCookieImg,
    category: "Now In Season",
    description: "● 12 ready-to-bake dough portions\n● Bake fresh at home anytime",
    productDetails: "Bring the bakery experience home with twelve ready-to-bake portions of our signature cookie dough. Each dough ball is pre-portioned so you can bake just one or the whole batch whenever the craving hits. The dough is made with the same premium ingredients we use in the bakery and freezes beautifully. Fresh, warm bakery cookies in your own kitchen, any time you want them.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "yes",
    delivery: "above orders of $80"
  },
  {
    id: '1930',
    name: "BREAD CLUB SUBSCRIPTION",
    price: "$350",
    img: breadClubImg,
    category: "Now In Season",
    description: "● 1 artisan loaf per week for 12 months\n● Priority access to limited breads\n● Founders Bread Card (VIP pickup)",
    productDetails: "Join our Bread Club and make artisan bread a delicious part of your routine. Each tier offers freshly baked, seasonal loaves sourced from local ingredients, delivered or ready for pickup on your schedule. Whether you’re enjoying a weekly treat, exploring limited seasonal varieties, or indulging in half-year or full-year subscriptions, our bakers ensure every loaf is crafted with care. Choose the tier that fits your appetite and lifestyle, and let us bring the joy of fresh, hand-crafted bread straight to you.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "yes",
    delivery: "above orders of $80",
    variants: [
        { label: "$350 - Weekly Bread Subscription", price: "$350" },
        { label: "$185 - Half-Year Bread Pass", price: "$185" },
        { label: "$10/week - Weekly Bread Pass", price: "$10/week" }
    ]
  },
  {
    id: '1934',
    name: "GIFTCARD",
    price: "Custom",
    img: storeGiftcardImg,
    category: "Now In Season",
    description: "Choose your amount",
    productDetails: "• Digital gift card purchases are delivered via email and contain instructions on how the code can be redeemed at checkout.\n\n• The redeemable code will be sent via email and can also be printed at home and given to the recipient in person. No physical item will be sent with a digital gift card purchase.\n\n• Good for anything in the storefront, including all physical and digital products. Codes will apply to this storefront only.\n\n• Digital gift cards can be used multiple times until the card balance hits zero.",
    pickup: "N/A",
    delivery: "Digital Delivery"
  },
  {
    id: '1931',
    name: "FOUNDERS PASTRY BOX",
    price: "$45",
    img: pastryBoxImg,
    category: "Pre-Sale",
    description: "● 8–10 premium pastries (rotating seasonal selection)\n● Exclusive flavors only for presale supporters",
    productDetails: "A rotating selection of 8–10 premium pastries created exclusively for presale supporters. Each box showcases seasonal ingredients and creative flavors that may not appear on the regular menu. These pastries are designed as a showcase of what the bakery is capable of when we experiment and innovate. Limited availability makes each box feel special and unique.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1935',
    name: "FOUNDERS PASTRY BOX TRIO BUNDLE",
    price: "$120",
    img: pastryTrioImg,
    category: "Pre-Sale",
    description: "3 pastry boxes (perfect for gifting or events)",
    productDetails: "Three Founders Pastry Boxes bundled together for gatherings, gifts, or serious pastry lovers. Each box features rotating seasonal pastries and creative flavor combinations. This bundle is perfect for events, office sharing, or stocking up on multiple pickup days. It’s also one of the best ways to experience the full range of our pastry program.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1933',
    name: "SIGNATURE COOKIE SET",
    price: "$70",
    img: signatureCookieImg,
    category: "Pre-Sale",
    description: "● 24 cookies (Baked or Frozen Dough)\n● Limited-edition flavors",
    productDetails: "A premium box of 24 cookies featuring some of our most creative and globally inspired flavors. These cookies are designed to highlight the bakery’s signature style, classic technique with unexpected influences. Available baked and ready to eat or as frozen dough to bake at home. Perfect for entertaining, gifting, or cookie enthusiasts.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1947',
    name: "PANTRY STAPLE BOX",
    price: "$95",
    img: pantryStapleImg,
    category: "Pre-Sale",
    description: "● House-made granola\n● Signature jam and honey butter\n● Specialty flour blend\n● Spiced sugar and salt blend\n● Recipe card set",
    productDetails: "A curated collection of house-made bakery staples designed to bring our flavors into your home kitchen. The box includes house granola, signature jam, honey butter, and a specialty flour blend used in our baking. You’ll also receive our house spiced sugar and salt blends along with a recipe card set. It’s a simple way to recreate bakery magic at home.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1938',
    name: "DELUXE PANTRY BOX",
    price: "$175",
    img: deluxePantryImg,
    category: "Pre-Sale",
    description: "● House-made granola\n● Signature jam and honey butter\n● Specialty flour blend\n● Spiced sugar and salt blend\n● Recipe card set\n● Seasonal Bonus Items",
    productDetails: "The Deluxe Pantry Box expands on our core pantry collection with seasonal bonus items and exclusive extras. Each box includes our house granola, signature jam, honey butter, specialty flour blend, and bakery spice blends. The recipe cards guide you through several of our favorite baking techniques and flavor combinations. This collection is perfect for passionate home bakers and food lovers.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1942',
    name: "FOUNDERS T-SHIRT",
    price: "$35",
    img: tshirtImg,
    category: "Pre-Sale",
    description: "● Heavyweight premium cotton\n● Minimal gold logo design\n● Founders Edition",
    productDetails: "A premium heavyweight cotton t-shirt designed for comfort and durability. The shirt features a minimal gold 24 Karat logo representing the bakery’s founding supporters. This limited edition release celebrates the early community that helped build the bakery. Simple, timeless, and made to last. Design is not final, local artists will submit designs and a vote by community members will decide the final design.",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1939',
    name: "FOUNDERS HOODIE",
    price: "$85",
    img: hoodieImg,
    category: "Pre-Sale",
    description: "● Luxury fleece hoodie\n● Embroidered 24 Karat logo\n● Limited-run numbering",
    productDetails: "A luxury fleece hoodie designed to feel as good as it looks. Each piece features an embroidered 24 Karat logo and limited-run numbering for the Founders Edition release. Warm, durable, and crafted for everyday wear. A perfect way to represent the bakery and the community behind it. Design is not final, local artists will submit designs and a vote by community members will decide the final design.",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1937',
    name: "24 KARAT COOKIE & PASTRY COOKBOOK, FOUNDER’S EDITION",
    price: "$45",
    img: cookbookImg,
    category: "Pre-Sale",
    description: "● 20-30 original recipes\n● Global cookie & pastry concepts\n● Co-op story + behind-the-scenes techniques",
    productDetails: "This limited edition cookbook features 20–30 original cookie and pastry recipes developed in our kitchen. The recipes highlight globally inspired flavors and the techniques we use to achieve bakery-level results. Alongside the recipes are stories about the co-op model and the journey of building the bakery. A digital edition is included so you can bake anywhere.",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1936_bundle',
    name: "24 KARAT COOKBOOK, COLLECTOR’S BUNDLE",
    price: "$110",
    img: cookbookBundleImg,
    category: "Pre-Sale",
    description: "● Limited Edition Cookbook\n● Pastry Box\n● Cookie Dozen (Baked or Frozen Dough)",
    productDetails: "The Collector’s Bundle pairs our Founder’s Edition cookbook with a pastry box and a dozen cookies. It’s designed for customers who want to both learn the recipes and taste the finished creations. This bundle also makes an exceptional gift for passionate bakers and food lovers. A perfect introduction to the 24 Karat bakery experience.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1945',
    name: "GOLD SUPPORTER BUNDLE",
    price: "$150",
    img: goldBundleImg,
    category: "Pre-Sale",
    description: "● Pastry box\n● Founders t-shirt\n● Cookie Dozen (Baked or Frozen Dough)\n● 5 Artisan sourdough loaf vouchers",
    productDetails: "The Gold Supporter Bundle combines some of our most popular items into one package. It includes a pastry box, a Founders t-shirt, a cookie dozen, and five artisan sourdough loaf vouchers. These vouchers can be redeemed anytime for fresh bread. This bundle is a great way to experience the bakery while supporting its launch.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1948',
    name: "PLATINUM BUNDLE",
    price: "$350",
    img: platinumBundleImg,
    category: "Pre-Sale",
    description: "● Bread for 6 months\n● Pantry staple box\n● Founders hoodie\n● Pastry box",
    productDetails: "The Platinum Bundle is designed for our most dedicated early supporters. It includes six months of bread, a pantry staple box, a Founders hoodie, and a pastry box. This package delivers a full experience of what the bakery offers across bread, pastries, and pantry goods. It’s one of the most complete ways to participate in the bakery’s founding year.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1946',
    name: "LEGACY BUNDLE",
    price: "$750",
    img: legacyBundleImg,
    category: "Pre-Sale",
    description: "● Bread for a year\n● Deluxe pantry box\n● Hoodie + t-shirt\n● Cookbook\n● Signature cookie set\n● VIP Founders recognition",
    productDetails: "The Legacy Bundle represents the deepest level of early support for the bakery. Members receive a full year of bread, a deluxe pantry box, a hoodie, t-shirt, cookbook, and signature cookie set. Supporters are also recognized as VIP Founders of the bakery. This bundle celebrates the people helping build the bakery from the very beginning.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can’t always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  }
];

function ProductSubHeader() {
  return (
    <div id="now-in-season" className="product-sub-header">
      <div className="container sub-header-container">
        <h2 className="now-in-season-title">NOW IN SEASON</h2>
        <div className="search-bar-v2">
          <input type="text" placeholder="Search Grocery Pickup & Delivery" />
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <div className="cart-link-v2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
}

const ProductCardV2 = ({ item, onClick }) => {
  return (
    <div className="product-card-v2" onClick={() => onClick && onClick(item.id)}>
      <div className="product-img-v2">
        <img src={item.img} alt={item.name} loading="lazy" />
        <button className="add-btn-v2" onClick={(e) => { e.stopPropagation(); redirectToCheckout(item.id); }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <div className="product-info-v2">
        <span className="p-price-v2">{item.price}</span>
        <h4 className="p-name-v2">{item.name}</h4>
        <p className="p-desc-v2">
            {item.description.split('\n').map((line, idx) => (
                <span key={idx}>{line}<br/></span>
            ))}
        </p>
      </div>
    </div>
  );
};

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
    <section id="community" className="waitlist-section">
      <div className="container">
        <div className="waitlist-flex">
          <div className="waitlist-content">
            <h2 className="section-title">Bring 24 Karat to<br />Your Community</h2>
            <p className="section-description">
              We aren’t a traditional chain; we’re a cooperative. Our goal is to seed locally owned 24 Karat Bakeries across Chicago and beyond—run by the people, for the people. Are you ready to lead the charge?
            </p>
          </div>

          <div className="waitlist-card">
            <h3 className="waitlist-card-title">JOIN OUR WAITLIST!</h3>
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
                <label>FISRT NAME</label>
                <input type="text" />
              </div>
              <div className="input-field">
                <label>LAST NAME</label>
                <input type="text" />
              </div>
            </div>

            <div className="input-field full-width">
              <label>EMAIL</label>
              <input type="email" />
            </div>

            <div className="input-field full-width">
              <label>ZIPCODE</label>
              <input type="text" />
            </div>

            <div className="submit-container">
              <button className="submit-btn-pill">SUBMIT</button>
            </div>
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
              From our beginnings in Chicago, 24 Karat Bakery Co-op was built on a simple idea: good food, good jobs, and shared ownership should grow together. Today, we create opportunity, empower worker-owners, and bring neighbors together through food that nourishes both people and community.
            </p>
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
              We’d love to hear from you! Whether you’re a customer, worker, entrepreneur, or community supporter; you’re part of what makes our bakery co-op possible.
            </p>
          </div>
          <div className="contact-form-card">
            <div className="form-header">
              <h3 className="contact-card-title">CONTACT US!</h3>
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
                <label>FISRT NAME</label>
                <input type="text" />
              </div>
              <div className="input-field">
                <label>LAST NAME</label>
                <input type="text" />
              </div>
            </div>
            <div className="input-field full-width">
              <label>COMPANY (FOR BUSINESS)</label>
              <input type="text" />
            </div>
            <div className="input-field full-width">
              <label>EMAIL</label>
              <input type="email" />
            </div>
            <div className="input-field full-width">
              <label>SUBJECT</label>
              <input type="text" />
            </div>
            <div className="input-field full-width">
              <label>MESSAGE</label>
              <textarea rows="1"></textarea>
            </div>
            <div className="submit-container">
              <button className="submit-btn-pill">SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuPage = ({ onProductClick }) => {
  const nowInSeasonProducts = allProducts.filter(p => p.category === "Now In Season");
  const presaleProducts = allProducts.filter(p => p.category === "Pre-Sale");

  return (
    <div className="menu-page-container">
      <ProductSubHeader />
      
      <section className="menu-section now-in-season-section-v2">
        <div className="container">
          <div className="product-grid-v2">
            {nowInSeasonProducts.map((item, i) => (
              <ProductCardV2 key={i} item={item} onClick={onProductClick} />
            ))}
          </div>
        </div>
      </section>

      <section className="menu-section presale-section-v2">
        <div className="container">
          <div className="presale-header-v2">
            <h2 className="presale-title-v2">PRE-SALE</h2>
            <p className="presale-desc-v2">
              Every item below is a real product you'll receive after launch. Your support funds equipment, licensing, ingredients, and our first production runs. All items are limited-run Founders Editions — once they're gone, they're gone.
            </p>
          </div>
          <div className="product-grid-v2">
            {presaleProducts.map((item, i) => (
              <ProductCardV2 key={i} item={item} onClick={onProductClick} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductDetailPage = ({ productId, onProductClick }) => {
  const product = useMemo(() => allProducts.find(p => p.id === productId), [productId]);
  const relatedProducts = useMemo(() => allProducts.filter(p => p.category === product?.category && p.id !== productId).slice(0, 5), [product, productId]);

  if (!product) return <div className="container">Product not found</div>;

  return (
    <div className="product-detail-page">
      <ProductSubHeader />
      
      <div className="container detail-content-wrapper">
        <div className="detail-layout">
          <div className="detail-image-block">
            <img src={product.img} alt={product.name} className="main-detail-img" />
          </div>
          
          <div className="detail-info-block">
            <h1 className="detail-name">{product.name}</h1>
            <div className="detail-price">
              {product.price.includes('$') && !product.price.includes('.') ? `${product.price}.00` : product.price}
            </div>
            
            <div className="detail-divider"></div>
            
            <button className="add-to-cart-big" onClick={() => redirectToCheckout(product.id)}>
              ADD TO CART
            </button>
            
            <div className="detail-sections">
              <div className="detail-section">
                <h4>DESCRIPTION</h4>
                <p className="desc-bullets">
                    {product.description.split('\n').map((line, i) => (
                        <span key={i}>{line}<br/></span>
                    ))}
                </p>
              </div>
              
              <div className="detail-section">
                <h4>PRODUCT DETAILS</h4>
                <p>{product.productDetails}</p>
              </div>
              
              {product.ingredients && (
                <div className="detail-section">
                  <h4>INGREDIENTS</h4>
                  <p>{product.ingredients}</p>
                </div>
              )}
              
              <div className="logistics-row">
                <div className="log-item">
                  <strong>PICK UP:</strong> {product.pickup.toUpperCase()}
                </div>
                <div className="log-item">
                  <strong>LOCAL DELIVERY:</strong> {product.delivery.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="related-products-section">
          <h2 className="related-title">YOU MAY ALSO LIKE</h2>
          <div className="product-grid-v2">
            {relatedProducts.map((item, i) => (
              <ProductCardV2 key={i} item={item} onClick={onProductClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Section7 = () => {
    // Section7 was likely the presale menu on the homepage, 
    // we can either keep it as is or redirect to menu.
    // For now, let's keep the existing Section7 logic if it was intended for the homepage.
    // Wait, I saw a 'presale-menu-section' in the broken code. Let's restore a clean version for Section7.
    return (
        <section className="presale-menu-section">
          <div className="container">
            <div className="presale-flex">
              <div className="presale-image">
                <img src={menuImg} alt="Bakery Presale Menu Items" loading="lazy" />
              </div>
              <div className="presale-content">
                <h2 className="presale-title">24 KARAT BAKERY<br />PRESALE MENU</h2>
                <p className="presale-intro">
                  Every item below is a real product you'll receive after launch. Your support funds equipment, licensing, ingredients, and our first production runs. All items are limited-run Founders Editions — once they're gone, they're gone.
                </p>
    
                <div className="menu-list">
                  <div className="menu-item-detailed">
                    <div className="item-main-row">
                      <h4 className="item-title">FOUNDERS PASTRY BOX | $45</h4>
                      <button onClick={() => redirectToCheckout('1931')} className="order-online-link">
                        Order Online <span>→</span>
                      </button>
                    </div>
                    <p className="item-sub-desc">
                      8–10 premium pastries (rotating seasonal selection)<br />
                      Exclusive flavors only for presale supporters
                    </p>
                    <div className="item-divider"></div>
                  </div>
    
                  <div className="menu-item-detailed">
                    <div className="item-main-row">
                      <h4 className="item-title">Founders Pastry Box Trio Bundle | $120</h4>
                      <button onClick={() => redirectToCheckout('1931')} className="order-online-link">
                        Order Online <span>→</span>
                      </button>
                    </div>
                    <p className="item-sub-desc">
                      3 pastry boxes (perfect for gifting or events)
                    </p>
                    <div className="item-divider"></div>
                  </div>
    
                  <div className="menu-item-detailed">
                    <div className="item-main-row">
                      <h4 className="item-title">Signature Cookie Set | $70</h4>
                      <button onClick={() => redirectToCheckout('1933')} className="order-online-link">
                        Order Online <span>→</span>
                      </button>
                    </div>
                    <p className="item-sub-desc">
                      24 cookies (baked or dough)<br />
                      Limited-edition flavors
                    </p>
                    <div className="item-divider"></div>
                  </div>
                </div>
    
                <div className="view-more-container">
                  <button className="view-more-options-btn" onClick={() => window.location.search = '?view=menu'}>
                    VIEW MORE OPTIONS
                  </button>
                </div>
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
      answer: "24 Karat Bakery Co-op is a community-driven bakery born from the idea that good food, good jobs, and shared ownership should grow together. We are a co-op where the people who bake the bread, serve the customers, and run the ovens all share in the success they help create."
    },
    {
      question: "How does a co-op work?",
      answer: "A co-op is owned and operated by its workers and community members, who make decisions democratically and share in any profits. Unlike traditional businesses, co-ops prioritize fair wages, ethical practices, and community benefit over maximizing profits. Everyone has a voice, everyone has a vote, and everyone has a path forward."
    },
    {
      question: "What type of cuisine will 24 Karat Bakery offer?",
      answer: "We believe the cuisine should authentically represent our community, bringing together clean, healthy, globally inspired ingredients. By highlighting seasonal flavors from diverse countries and regions, we aim to create a vibrant culinary experience that nourishes both people and community."
    },
    {
      question: "Where will the bakery be located?",
      answer: "Our location will be in Chicago, near the Lincoln Park area. While the exact address is yet to be determined, we are building a permanent, community-owned marketplace where local food and neighbors can shine year-round."
    },
    {
      question: "This sounds awesome! How can I get involved?",
      answer: "You can join us by signing up as a Community Owner! We’re looking for bakers, baristas, and dedicated customers to help bring this project to life. Check our 'Become an Owner' section or sign up for our newsletter to stay updated on our progress and the launch of our Chicago space."
    },
    {
      question: "What is community ownership at 24 Karat Bakery?",
      answer: "Community ownership means the bakery is owned by the people who use it and work in it. It’s not about control; it’s about empowerment. It ensures the business stays rooted in the community’s needs rather than just seeking outside profit."
    },
    {
      question: "What Does It Mean to Be a Community Owner?",
      answer: "As a community owner, you have a real say in the future of your neighborhood bakery. You help shape the mission, vote on key decisions, and share in the success of the co-op. It’s a way to invest in a business that aligns with your values."
    },
    {
      question: "How to Become a Community Owner",
      answer: "You can become a founder by choosing an ownership tier that fits your contribution level. Each tier comes with specific perks and a share in the co-op. See our membership section for details on how to join and help us reach our goal of 100 enthusiastic members."
    },
    {
      question: "How do you help food entrepreneurs?",
      answer: "We provide a year-round marketplace where small food makers can sell their goods without the high overhead of their own storefront. This helps turn passions into sustainable businesses while keeping more money in the entrepreneurs' pockets."
    },
    {
      question: "How do you help workers?",
      answer: "At 24 Karat, work isn't just a paycheck—it's a path to growth. We offer fair pay above market rates, hands-on training in baking and business skills, and a real voice in decision-making as a co-owner."
    },
    {
      question: "What is your promise?",
      answer: "We promise to bake with purpose: feeding people well with clean ingredients, supporting our worker-owners through skill-building, and reinvesting locally in community projects and food education."
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

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const handleView = () => {
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash;
      const product = params.get('product');

      if (product) {
        setSelectedProductId(product);
        setView('product');
      } else if (params.get('view') === 'menu' || hash === '#now-in-season') {
        setView('menu');
      } else {
        setView('home');
      }
    };

    handleView(); // Initial check
    window.addEventListener('popstate', handleView);
    window.addEventListener('hashchange', handleView);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('popstate', handleView);
      window.removeEventListener('hashchange', handleView);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProductClick = (id) => {
    const url = new URL(window.location);
    url.searchParams.set('product', id);
    window.history.pushState({}, '', url);
    setSelectedProductId(id);
    setView('product');
    window.scrollTo(0, 0);
  };

  if (view === 'product') {
    return (
      <div className="app product-view">
        <Navbar isScrolled={isScrolled} />
        <ProductDetailPage productId={selectedProductId} onProductClick={handleProductClick} />
        <FAQSection />
        <Footer />
      </div>
    );
  }

  if (view === 'menu') {
    return (
      <div className="app menu-view">
        <Navbar isScrolled={isScrolled} />
        <MenuPage onProductClick={handleProductClick} />
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
