import { useState } from 'react';
import logo from './assets/images/logo.png';
import './footer.css';

const FOOTER_LINKS = {
  Company: [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ],
  Services: [
    { href: '#services', label: 'Web Development' },
    { href: '#services', label: 'UI/UX Design' },
    { href: '#services', label: 'Digital Marketing' },
  ],
  Legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
  ],
};

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubscribed(true);
    setEmail('');
  };

  const handleSubscribeAgain = () => {
    setSubscribed(false);
    setError('');
  };

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img src={logo} alt="" />
            <span>Nova Digital</span>
          </a>
          <p>
            Full-service digital agency helping brands build, launch, and grow online since 2019.
          </p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              X
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              ig
            </a>
          </div>
        </div>
        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title} className="footer-col">
            <h4>{title}</h4>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-col footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Monthly tips on web, design, and marketing.</p>
          {subscribed ? (
            <div className="newsletter-success" role="status">
              <p>Thanks for subscribing! Check your inbox for updates.</p>
              <button type="button" className="newsletter-reset" onClick={handleSubscribeAgain}>
                Subscribe another email
              </button>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit} noValidate>
              <label className="sr-only" htmlFor="newsletter-email">
                Email for newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'newsletter-error' : undefined}
              />
              {error && (
                <p id="newsletter-error" className="newsletter-error" role="alert">
                  {error}
                </p>
              )}
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Nova Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
