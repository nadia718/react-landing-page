import { useState } from 'react';
import './contact.css';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-heading">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s Start Your Project</h2>
          <p className="section-subtitle contact-subtitle">
            Tell us about your goals and we&apos;ll respond within one business day.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>We welcome projects of any size — from landing pages to full digital transformations.</p>
            <div className="info-box">
              <h4>Email</h4>
              <a href="mailto:hello@novadigital.pk">hello@novadigital.pk</a>
            </div>
            <div className="info-box">
              <h4>Phone</h4>
              <a href="tel:+923001234567">+92 300 1234567</a>
            </div>
            <div className="info-box">
              <h4>Office</h4>
              <p>Gulberg III, Lahore, Pakistan</p>
            </div>
            <div className="contact-hours">
              <strong>Business hours</strong>
              <p>Mon – Fri, 9:00 AM – 6:00 PM PKT</p>
            </div>
          </div>
          <div className="contact-form">
            {submitted ? (
              <div className="form-success" role="status">
                <h3>Thank you!</h3>
                <p>Your message has been received. We&apos;ll get back to you shortly.</p>
                <button type="button" className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label className="sr-only" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <label className="sr-only" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <label className="sr-only" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
                <label className="sr-only" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
