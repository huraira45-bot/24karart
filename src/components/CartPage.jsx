import { useMemo } from 'react';
import { ProductSubHeader } from './MenuPage';
import '../styles/CartPage.css';

const CartPage = ({ cart, onUpdateQuantity, onRemove, onCheckout, onCartClick, cartCount }) => {
  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      const priceStr = item.price ? String(item.price) : '0';
      const cleanPrice = priceStr.replace(/[^0-9.]/g, '');
      const priceVal = parseFloat(cleanPrice) || 0;
      return sum + (priceVal * item.quantity);
    }, 0);
  }, [cart]);

  return (
    <div className="cart-page-container" style={{ paddingTop: '180px' }}>
      <ProductSubHeader cartCount={cartCount} onCartClick={onCartClick} minimal={true} />
      
      <div className="container cart-content-wrapper">
        <div className="cart-header-top">
          <a href="?view=menu" className="back-to-store-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            RETURN TO STORE
          </a>
          <h1 className="cart-title-refined">YOUR CART</h1>
          <div className="header-spacer"></div>
        </div>
        
        {cart.length === 0 ? (
          <div className="empty-cart-state">
            <p>Your cart is currently empty.</p>
            <a href="?view=menu" className="return-store-btn">BACK TO STORE</a>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items-list">
              <div className="cart-header-labels">
                <span className="label-product">PRODUCT</span>
                <span className="label-price">PRICE</span>
                <span className="label-quantity">QUANTITY</span>
                <span className="label-total">TOTAL</span>
              </div>
              
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div className="cart-item-info">
                    <img src={item.img} alt={item.name} className="cart-item-img" />
                    <div>
                      <h3 className="cart-item-name">{item.name}</h3>
                      <button className="remove-item-btn" onClick={() => onRemove(item.id)}>Remove</button>
                    </div>
                  </div>
                  <div className="cart-item-price">
                    {item.price.includes('$') && !item.price.includes('.') ? `${item.price}.00` : item.price}
                  </div>
                  <div className="cart-item-quantity">
                    <div className="quantity-controls">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    ${((parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary-card">
              <h3>ORDER SUMMARY</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="checkout-btn-big" onClick={onCheckout}>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
