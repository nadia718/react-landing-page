import './cta.css';

const Cta = () => {
  return (
    <section className="cta-band" aria-label="Call to action">
      <div className="container cta-inner">
        <div>
          <h2>Ready to Transform Your Online Presence?</h2>
          <p>Book a free 30-minute consultation and get a tailored project roadmap.</p>
        </div>
        <a href="#contact" className="btn btn-primary cta-btn">
          Schedule a Call
        </a>
      </div>
    </section>
  );
};

export default Cta;
