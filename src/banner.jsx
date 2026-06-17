import './banner.css';
import bannerImage from './assets/images/hero.jpg';
import bannerBg from './assets/images/bannerbackground.png';

const TRUST_ITEMS = ['150+ Projects', '98% Client Satisfaction', '5+ Years Experience'];

const Banner = () => {
  return (
    <section id="home" className="banner" style={{ '--banner-bg': `url(${bannerBg})` }}>
      <div className="banner-inner container">
        <div className="banner-content">
          <span className="section-label banner-label">Digital Agency</span>
          <h1>Build Your Brand With Confidence Online</h1>
          <p>
            We design and develop high-performing websites, craft memorable brands, and run
            data-driven marketing campaigns that turn visitors into loyal customers.
          </p>
          <div className="banner-actions">
            <a href="#contact" className="btn btn-primary">
              Start Your Project
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
          <ul className="banner-trust" aria-label="Company highlights">
            {TRUST_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="banner-image">
          <img src={bannerImage} alt="Team collaborating on a digital project" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
