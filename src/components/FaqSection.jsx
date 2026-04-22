import React, { useState } from 'react';

const faqs = [
  'Best Ayurvedic medicine for Sexual Weakness',
  'What is the best Ayurvedic treatment for joint pain?',
  'How to improve digestion naturally with Ayurveda?',
  'What are the benefits of Shilajit capsules?',
];

const FaqSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-section" id="faq">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2>FAQ</h2>
        {faqs.map((q, i) => (
          <div className="faq-item" key={i} onClick={() => setOpen(open === i ? null : i)}>
            <div className="faq-question">
              <span><span className="num">{i + 1}</span>{q}</span>
              <span>{open === i ? '−' : '+'}</span>
            </div>
            {open === i && (
              <div style={{ paddingTop: '12px', fontSize: '14px', color: '#555', lineHeight: 1.7 }}>
                Salamati Ayurveda provides the best natural Ayurvedic solutions for this concern.
                Our products are made from 100% pure herbal extracts. Consult with our experts for
                personalized guidance.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
