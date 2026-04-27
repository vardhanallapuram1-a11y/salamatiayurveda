import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import callImg from '../assets/imgs/call.jpg';

const CtaSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="cta-section" style={{ background: '#e8e8e8', padding: '60px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <img 
            ref={ref}
            src={callImg} 
            alt="Call Support" 
            className={`reveal-left ${isVisible ? 'revealed' : ''}`}
            style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
          />
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: 'clamp(24px, 8vw, 42px)', fontWeight: 900, color: '#0d2818', margin: 0 }}>+91 7428526936</h3>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#1a5c2a', margin: '5px 0 0' }}>Call us if you have any questions</p>
          </div>
        </div>
      </div>
    </section>
  );
};




export default CtaSection;
