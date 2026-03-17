import carouselImg1 from '../assets/crousel/24-karat-bakery-carousel-box-01.JPG';
import '../styles/Section5.css';
import carouselImg2 from '../assets/crousel/24-karat-bakery-carousel-box-02.jpg';
import carouselImg3 from '../assets/crousel/24-karat-bakery-carousel-box-03.JPG';
import carouselImg4 from '../assets/crousel/24-karat-bakery-carousel-box-04.jpg';
import carouselImg5 from '../assets/crousel/24-karat-bakery-carousel-box-05.jpg';
import carouselImg6 from '../assets/crousel/24-karat-bakery-carousel-box-06.jpg';
import carouselImg7 from '../assets/crousel/24-karat-bakery-carousel-box-07.jpg';
import carouselImg8 from '../assets/crousel/24-karat-bakery-carousel-box-08.jpg';
import carouselImg9 from '../assets/crousel/24-karat-bakery-carousel-box-09.jpg';
import carouselImg10 from '../assets/crousel/24-karat-bakery-carousel-box-10.jpg';
import carouselImg11 from '../assets/crousel/24-karat-bakery-carousel-box-11.jpg';
import carouselImg12 from '../assets/crousel/24-karat-bakery-carousel-box-12.jpg';

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

export default Section5;
