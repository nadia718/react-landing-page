import './testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      'Nova Digital rebuilt our site in six weeks. Traffic is up 40% and our contact form submissions doubled.',
    name: 'Ahmed Khan',
    role: 'CEO, TechStart Lahore',
    initials: 'AK',
  },
  {
    quote:
      'Professional from kickoff to launch. The UI is clean, fast, and exactly what we envisioned.',
    name: 'Sara Malik',
    role: 'Marketing Director, Retail Plus',
    initials: 'SM',
  },
  {
    quote:
      'Their marketing team helped us scale ad spend profitably. Clear reporting every week.',
    name: 'Hassan Raza',
    role: 'Founder, GreenMart',
    initials: 'HR',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Trusted by Growing Businesses</h2>
          <p className="section-subtitle testimonials-subtitle">
            Hear from clients who partnered with us to launch and scale online.
          </p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <blockquote key={item.name} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
              <footer className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <div>
                  <cite>{item.name}</cite>
                  <span>{item.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
