import heroBg from '../assets/new img/home img.jpg';
import '../styles/Hero.css';

function Hero() {
  return (
    <header id="hero" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          BAKING FOR CHICAGO AND WE'RE<br />
          JUST GETTING WARMED UP.
        </h1>
        <p className="sub-heading">
          We're building more than a bakery, we're creating a community-powered movement rooted
          right here in Chicago. From the first batch to the first storefront, this is your chance to own a
          piece from the beginning. Join us as a founding owner and help shape what rises next.
        </p>
        <a href="#ownership" className="cta-button" style={{ display: 'inline-block', textDecoration: 'none' }}>BECOME A FOUNDER</a>
      </div>
    </header>
  );
}

export default Hero;
