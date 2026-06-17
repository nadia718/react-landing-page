import { useState } from 'react';
import './faq.css';

const FAQ_ITEMS = [
  {
    question: 'How long does a typical website project take?',
    answer:
      'Most business websites take 4–8 weeks from discovery to launch. Complex e-commerce or custom apps may take longer; we provide a detailed timeline after the initial consultation.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. We offer maintenance plans covering security updates, content changes, performance monitoring, and priority support so your site stays healthy.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We work on fixed-price projects for defined scopes and monthly retainers for marketing and maintenance. Every proposal is transparent with no hidden fees.',
  },
  {
    question: 'Can you work with our existing brand guidelines?',
    answer:
      'Absolutely. We integrate your colors, typography, and voice into every deliverable, or help refine your brand if you are starting fresh.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="container faq-inner">
        <div className="faq-intro">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">
            Everything you need to know before starting your project. Still have questions?{' '}
            <a href="#contact">Contact us</a>.
          </p>
        </div>
        <div className="faq-list" role="list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.question}
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
