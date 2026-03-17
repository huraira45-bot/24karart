import storyImg1 from '../assets/com/24-karat-bakery-community-rooted.JPG';
import storyImg2 from '../assets/com/24-karat-bakery-community-rooted-02.jpg';
import '../styles/Section4.css';

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

export default Section4;
