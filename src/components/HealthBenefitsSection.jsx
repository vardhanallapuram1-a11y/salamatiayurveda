import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import healthImg from '../assets/imgs/section-7.png';

const HealthBenefitsSection = () => {
  const [imgRef, imgVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();

  return (
    <section className="health-benefits-section" style={{ background: '#f9f9f9', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Left column: Image */}
          <div 
            ref={imgRef} 
            className={`reveal ${imgVisible ? 'revealed' : ''}`}
            style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <img src={healthImg} alt="Health Benefits of Ayurveda" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          {/* Right column: Content */}
          <div ref={contentRef} className={`reveal ${contentVisible ? 'revealed' : ''} delay-200`}>
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '42px', 
            fontWeight: 800, 
            color: '#1a5c2a', 
            marginBottom: '24px',
            lineHeight: 1.2
          }}>
            Health Benefits <br />of Ayurveda
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#444', 
            lineHeight: 1.8, 
            marginBottom: '32px' 
          }}>
            Ayurveda, an ancient Indian healing system, offers numerous health benefits. 
            It promotes holistic well-being through personalized nutrition, herbal remedies, 
            and lifestyle practices. Ayurvedic treatments aid digestion, boost immunity, 
            reduce stress, and balance energies (doshas). Embracing Ayurveda supports natural 
            healing, enhances vitality, and fosters overall physical and mental wellness.
          </p>
          <Link 
            to="/products" 
            style={{ 
              display: 'inline-block',
              background: '#f1b317',
              color: '#0d2818',
              padding: '16px 40px',
              fontWeight: 700,
              fontSize: '15px',
              fontFamily: "'Playfair Display', serif",
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderRadius: '4px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#d4a017'}
            onMouseOut={(e) => e.target.style.background = '#f1b317'}
          >
            Order now
          </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthBenefitsSection;

