import '../styles/Section6.css';

const Section6 = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-flex">
          <div className="contact-content">
            <h2 className="section-title">WE WANT TO<br />HEAR FROM YOU</h2>
            <p className="section-description">
              We'd love to hear from you! Whether you're a customer, worker, entrepreneur, or community supporter; you're part of what makes our bakery co-op possible.
            </p>
          </div>
          <div className="contact-form-card">
            <div className="form-header">
              <h3 className="contact-card-title">CONTACT US!</h3>
              <p className="interest-label">I'M INTERESTED IN:</p>
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

export default Section6;
