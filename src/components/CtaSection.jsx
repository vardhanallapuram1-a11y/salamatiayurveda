import React from 'react';

const CtaSection = () => (
  <section className="cta-section" style={{ background: '#f5f1e9', padding: '40px 0' }}>
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: '80px', height: '80px', background: '#fff', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            border: '2px solid #1a5c2a'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#0d2818', margin: 0 }}>+91 7428526936</h3>
            <p style={{ color: '#1a5c2a', fontWeight: 700, margin: 0 }}>Call us if you have any questions</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;
