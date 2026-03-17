import bt1 from '../assets/img/bt1.jpeg';
import bt2 from '../assets/img/bt2.jpeg';
import bt3 from '../assets/img/bt3.jpeg';
import { redirectToCheckout } from '../utils/checkout';
import '../styles/Section1.css';

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

export default Section1;
