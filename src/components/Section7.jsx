import menuImg from '../assets/PRESALEMENU/24-karat-bakery-presale-menu.jpg';
import { redirectToCheckout } from '../utils/checkout';
import '../styles/Section7.css';

const Section7 = () => {
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

export default Section7;
