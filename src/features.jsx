import './features.css';

const FEATURES = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'Agile workflows and clear milestones so your project ships on schedule.',
  },
  {
    icon: '🎯',
    title: 'Results Focused',
    description: 'Every design and campaign is tied to measurable business outcomes.',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Modern stacks, best practices, and ongoing maintenance you can trust.',
  },
  {
    icon: '🤝',
    title: 'Long-Term Partnership',
    description: 'We stay with you after launch with support, updates, and optimization.',
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Built for Growth, Designed for Trust</h2>
          <p className="section-subtitle features-subtitle">
            From first wireframe to post-launch analytics, we combine creativity with
            engineering discipline.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="feature-card">
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
