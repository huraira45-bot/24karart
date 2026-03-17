import { useMemo } from 'react';
import { allProducts } from '../data/products';
import { ProductSubHeader, ProductCardV2 } from './MenuPage';
import '../styles/ProductDetailPage.css';

const ProductDetailPage = ({ productId, onProductClick, onAddToCart, cartCount, onCartClick }) => {
  const product = useMemo(() => allProducts.find(p => p.id === productId), [productId]);
  const relatedProducts = useMemo(() => allProducts.filter(p => p.category === product?.category && p.id !== productId).slice(0, 5), [product, productId]);

  if (!product) return <div className="container">Product not found</div>;

  return (
    <div className="product-detail-page">
      <ProductSubHeader cartCount={cartCount} onCartClick={onCartClick} />
      
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
            
            <button className="add-to-cart-big" onClick={() => onAddToCart(product)}>
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

export default ProductDetailPage;
