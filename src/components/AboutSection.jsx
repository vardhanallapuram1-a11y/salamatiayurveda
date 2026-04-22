import React from 'react';
import aboutIllustration from '../assets/about_illustration.png';

const AboutSection = () => (
  <section className="about-section" id="about">
    <div className="container">
      <div className="about-inner">

        {/* Left: Illustration */}
        <div className="about-image">
          <img 
            src={aboutIllustration} 
            alt="About Salamati Ayurveda" 
          />
        </div>

        {/* Right: Content — exact text from salamatiayurveda.com/about-us/ */}
        <div className="about-content">
          <p className="subtitle">Best Ayurveda Company</p>
          <h2>SALAMATI AYURVEDA</h2>
          <div className="gold-line"></div>
          <p>
            Salamati Ayurveda is the best company in India for helping people feel healthy.
            Salamati Ayurveda uses old Indian health ideas in a new way. They make pills that
            are easy to take and don't taste bad. These pills have special mixes of herbs that
            are good for your whole body.
          </p>
          <p>
            Many people today find it hard to use old health treatments. But Salamati Ayurveda
            makes it easy. Their pills don't taste like herbs, so even kids can take them.
            This smart idea helps everyone use the good parts of old Indian health wisdom.
          </p>
          <p>
            With Salamati Ayurveda, you can use nature's way of staying healthy in a way that
            fits your busy life today. This can help you have a better and more balanced future.
          </p>
          <div style={{ marginTop: '24px' }}>
            <a
              href="tel:+917428526936"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#0d2818', color: '#fff',
                padding: '12px 24px', fontWeight: 700, fontSize: '15px',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              📞 +91 7428526936
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
