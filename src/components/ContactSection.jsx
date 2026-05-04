import React from 'react';

const ContactSection = () => (
  <section style={{ background: '#fff', padding: '60px 0' }} id="contact-info">
    <div className="container" style={{ maxWidth: '900px' }}>
      <div className="section-title">
        <h2 style={{ color: '#0d2818' }}>SALAMATI AYURVEDA PVT. LTD.</h2>
        <div className="title-underline"></div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
        marginTop: '40px',
      }}>
        {/* Address */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#0d2818', fontSize: '18px', fontWeight: 700, marginBottom: '8px', borderBottom: '2px solid #e2ab34', paddingBottom: '8px' }}>
            Address
          </h4>
          <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.8 }}>Johripur Delhi - 110094</p>
        </div>

        {/* Contact Us */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#0d2818', fontSize: '18px', fontWeight: 700, marginBottom: '8px', borderBottom: '2px solid #e2ab34', paddingBottom: '8px' }}>
            Contact Us
          </h4>
          <a href="tel:+917428526936" style={{ color: '#555', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            📞 +91 7428526936
          </a>
          <a href="mailto:ayurvedasalamati@gmail.com" style={{ color: '#555', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ✉️ ayurvedasalamati@gmail.com
          </a>
        </div>

        {/* Opening Hours */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#0d2818', fontSize: '18px', fontWeight: 700, marginBottom: '8px', borderBottom: '2px solid #e2ab34', paddingBottom: '8px' }}>
            Opening Hours
          </h4>
          <p style={{ color: '#555', fontSize: '14px' }}>Monday – Friday: 10 AM – 6 PM</p>
          <p style={{ color: '#888', fontSize: '13px' }}>Saturday – Sunday: Closed</p>
        </div>

        {/* Follow Us */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#0d2818', fontSize: '18px', fontWeight: 700, marginBottom: '8px', borderBottom: '2px solid #e2ab34', paddingBottom: '8px' }}>
            Follow Us
          </h4>
          <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
            <a href="https://www.facebook.com/profile.php?id=61586279880195" target="_blank" rel="noreferrer"
               style={{ background: '#0d2818', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
              f
            </a>
            <a href="https://www.instagram.com/salamatiayurveda8/" target="_blank" rel="noreferrer"
               style={{ background: '#0d2818', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
              IG
            </a>
            <a href="https://www.youtube.com/@SalamatiAyurveda/featured" target="_blank" rel="noreferrer"
               style={{ background: '#0d2818', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
              YT
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
