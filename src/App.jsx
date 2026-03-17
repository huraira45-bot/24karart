import { useState, useEffect } from 'react'

// Global styles (resets, container, responsive overrides)
import './styles/global.css'
import './styles/shared.css'
import './styles/responsive.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import MenuPage from './components/MenuPage'
import CartPage from './components/CartPage'
import ProductDetailPage from './components/ProductDetailPage'

// Utils
import { redirectToCheckout } from './utils/checkout'

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
      } else if (params.get('view') === 'cart') {
        setView('cart');
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

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!product) return;
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCartClick = () => {
    setView('cart');
    const url = new URL(window.location);
    url.searchParams.delete('product');
    url.searchParams.set('view', 'cart');
    window.history.pushState({}, '', url);
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      redirectToCheckout(cart[0].id, cart[0].quantity);
    }
  };

  const handleProductClick = (id) => {
    const url = new URL(window.location);
    url.searchParams.set('product', id);
    url.searchParams.delete('view');
    window.history.pushState({}, '', url);
    setSelectedProductId(id);
    setView('product');
    window.scrollTo(0, 0);
  };

  // --- View Rendering ---

  if (view === 'product') {
    return (
      <div className="app product-view">
        <Navbar isScrolled={isScrolled} cartCount={cart.length} onCartClick={handleCartClick} />
        <ProductDetailPage 
          productId={selectedProductId} 
          onProductClick={handleProductClick} 
          onAddToCart={addToCart}
          cartCount={cart.length}
          onCartClick={handleCartClick}
        />
        <Section3 />
        <FAQSection />
        <Footer />
      </div>
    );
  }

  if (view === 'cart') {
    return (
      <div className="app cart-view">
        <Navbar isScrolled={isScrolled} cartCount={cart.length} onCartClick={handleCartClick} />
        <CartPage 
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
          onCartClick={handleCartClick}
          cartCount={cart.length}
        />
        <FAQSection />
        <Footer />
      </div>
    );
  }

  if (view === 'menu') {
    return (
      <div className="app menu-view">
        <Navbar isScrolled={isScrolled} cartCount={cart.length} onCartClick={handleCartClick} />
        <MenuPage 
          onProductClick={handleProductClick} 
          cartCount={cart.length} 
          onCartClick={handleCartClick} 
          onAddToCart={addToCart}
        />
        <Section1 />
        <Section2 />
        <Section3 />
        <FAQSection />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app home-view">
      <Navbar isScrolled={isScrolled} cartCount={cart.length} onCartClick={handleCartClick} />
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
