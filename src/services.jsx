import servicesImage1 from './assets/images/services1.png';
import servicesImage2 from './assets/images/services2.png';
import servicesImage3 from './assets/images/services3.png';
import background2 from './assets/images/background2.webp';
import './services.css';

const SERVICES = [
  {
    image: servicesImage1,
    title: 'Web Development',
    description:
      'Custom React websites, e-commerce stores, and web apps optimized for speed, SEO, and conversions.',
    tags: ['React', 'E-commerce', 'SEO'],
  },
  {
    image: servicesImage2,
    title: 'UI/UX Design',
    description:
      'User research, wireframes, and polished interfaces that make your product intuitive and on-brand.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
  },
  {
    image: servicesImage3,
    title: 'Digital Marketing',
    description:
      'Social ads, content strategy, and analytics to attract qualified leads and grow your revenue.',
    tags: ['Ads', 'Content', 'Analytics'],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="services"
      style={{ '--services-bg': `url(${background2})` }}
    >
      <div className="container">
        <div className="services-header">
          <span className="section-label services-label">Our Services</span>
          <h2 className="section-title services-title">Solutions Tailored to Your Goals</h2>
          <p className="section-subtitle services-subtitle">
            Whether you need a new site, a brand refresh, or a full marketing funnel, we have the
            expertise to deliver.
          </p>
        </div>
        <div className="services-list">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-item">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-tags">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href="#contact" className="service-link">
                Get a quote →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
