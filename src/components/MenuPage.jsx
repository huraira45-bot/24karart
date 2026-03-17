import { allProducts } from '../data/products';
import { redirectToCheckout } from '../utils/checkout';
import '../styles/MenuPage.css';
import '../styles/MenuPageOld.css';

function ProductSubHeader({ cartCount, onCartClick, minimal = false }) {
  return (
    <div id="now-in-season" className={`product-sub-header ${minimal ? 'minimal' : ''}`}>
      <div className="container sub-header-container">
        {!minimal && <h2 className="now-in-season-title">NOW IN SEASON</h2>}
        {!minimal && (
          <div className="search-bar-v2">
            <input type="text" placeholder="Search Grocery Pickup & Delivery" />
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        )}
        {minimal && <div style={{ flex: 1 }}></div>}
        <div className="cart-link-v2" onClick={onCartClick} style={{ cursor: 'pointer' }}>
          <div className="cart-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
}

const ProductCardV2 = ({ item, onClick, onAddToCart }) => {
  return (
    <div className="product-card-v2" onClick={() => onClick && onClick(item.id)}>
      <div className="product-img-v2">
        <img src={item.img} alt={item.name} loading="lazy" />
        <button className="add-btn-v2" onClick={(e) => { e.stopPropagation(); onAddToCart && onAddToCart(item); }}>
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

const MenuPage = ({ onProductClick, cartCount, onCartClick, onAddToCart }) => {
  const nowInSeasonProducts = allProducts.filter(p => p.category === "Now In Season");
  const presaleProducts = allProducts.filter(p => p.category === "Pre-Sale");

  return (
    <div className="menu-page-container">
      <ProductSubHeader cartCount={cartCount} onCartClick={onCartClick} />
      
      <section className="menu-section now-in-season-section-v2">
        <div className="container">
          <div className="product-grid-v2">
            {nowInSeasonProducts.map((item, i) => (
              <ProductCardV2 key={i} item={item} onClick={onProductClick} onAddToCart={onAddToCart} />
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
              <ProductCardV2 key={i} item={item} onClick={onProductClick} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { ProductSubHeader, ProductCardV2 };
export default MenuPage;
