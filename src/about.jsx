import aboutImage from './assets/images/feature.jpg';
import './about.css';

const HIGHLIGHTS = [
  'Strategy-first approach for every project',
  'Transparent timelines and fixed milestones',
  'Dedicated project manager from day one',
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner container">
        <div className="about-image">
          <img src={aboutImage} alt="Our team at work" />
        </div>
        <div className="about-content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">We Help Businesses Grow in the Digital World</h2>
          <p>
            Nova Digital is a full-service agency based in Lahore, Pakistan. Since 2019 we have
            partnered with startups and established brands to launch websites, refine their visual
            identity, and scale through targeted digital marketing.
          </p>
          <ul className="about-highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
