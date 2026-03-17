import '../styles/Section3.css';

const Section3 = () => {
  return (
    <section id="community" className="waitlist-section">
      <div className="container">
        <div className="waitlist-flex">
          <div className="waitlist-content">
            <h2 className="section-title">Bring 24 Karat to<br />Your Community</h2>
            <p className="section-description">
              We aren't a traditional chain; we're a cooperative. Our goal is to seed locally owned 24 Karat Bakeries across Chicago and beyond—run by the people, for the people. Are you ready to lead the charge?
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

export default Section3;
