import React from 'react';

const ContactPage = () => {
  return (
    <main style={{ marginTop: '100px' }}>
      {/* Page Banner */}
      <div style={{ 
        background: '#0d2818', 
        padding: '60px 0', 
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <h1 style={{ 
            color: '#fff', 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '42px', 
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '12px' 
          }}>
            SALAMATI AYURVEDA PVT. LTD
          </h1>

        </div>
      </div>

      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          
          {/* Contact Info Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px', 
            marginBottom: '80px' 
          }}>
            
            {/* Address Card */}
            <div style={{ textAlign: 'center', padding: '40px 20px', border: '1px solid #f0f0f0', borderRadius: '8px', transition: 'transform 0.3s' }}>
              <div style={{ 
                width: '70px', height: '70px', background: '#f9f9f9', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                color: '#1a5c2a'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, marginBottom: '15px', color: '#0d2818' }}>Address</h3>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.6 }}>Johripur Delhi - 110094<br/>(Delhi - 94)</p>
            </div>

            {/* Contact Us Card */}
            <div style={{ textAlign: 'center', padding: '40px 20px', border: '1px solid #f0f0f0', borderRadius: '8px', transition: 'transform 0.3s' }}>
              <div style={{ 
                width: '70px', height: '70px', background: '#f9f9f9', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                color: '#1a5c2a'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, marginBottom: '15px', color: '#0d2818' }}>Contact us</h3>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.6 }}>
                Phone: +91 7428526936<br/>
                Email: ayurvedasalamati@gmail.com
              </p>
            </div>

            {/* Opening Hours Card */}
            <div style={{ textAlign: 'center', padding: '40px 20px', border: '1px solid #f0f0f0', borderRadius: '8px', transition: 'transform 0.3s' }}>
              <div style={{ 
                width: '70px', height: '70px', background: '#f9f9f9', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                color: '#1a5c2a'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, marginBottom: '15px', color: '#0d2818' }}>Opening hours</h3>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.6 }}>
                Monday – Friday: 10 AM – 6 PM<br/>
                Saturday – Sunday: Closed
              </p>
            </div>

          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            
            {/* Contact Form */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 800, color: '#0d2818', marginBottom: '30px' }}>
                SEND A MESSAGE
              </h2>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="text" placeholder="Your Name" style={inputStyle} />
                  <input type="email" placeholder="Your Email" style={inputStyle} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="tel" placeholder="Mobile Number" style={inputStyle} />
                  <input type="text" placeholder="Subject" style={inputStyle} />
                </div>
                <input type="text" placeholder="Details" style={inputStyle} />
                <textarea placeholder="Message" rows="5" style={{ ...inputStyle, resize: 'none' }}></textarea>
                <button type="submit" style={{ 
                  background: '#f1b317', 
                  color: '#0d2818', 
                  border: 'none', 
                  padding: '16px 32px', 
                  fontSize: '14px', 
                  fontWeight: 700, 
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  width: 'fit-content',
                  transition: 'background 0.3s'
                }}>
                  SEND A MESSAGE
                </button>
              </form>
            </div>

            {/* Google Maps */}
            <div style={{ height: '100%', minHeight: '450px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.399580456102!2d77.27974394998993!3d28.671370215705357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc07f5a25b63%3A0x2fe160a51d7ae5f0!2s30%20Feet%20Rd%2C%20Johripur%20Extension%2C%20Johripur%2C%20Delhi%2C%20110090!5e0!3m2!1sen!2sin!4v1714200000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* Internal CSS for Inputs - to avoid cluttering JSX too much */}
      <style>{`
        @media (max-width: 900px) {
          main section .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          input, textarea {
            grid-column: span 2;
          }
        }
      `}</style>
    </main>
  );
};

const inputStyle = {
  width: '100%',
  padding: '14px 20px',
  border: '1px solid #eee',
  borderRadius: '4px',
  fontSize: '14px',
  outline: 'none',
  background: '#fcfcfc',
  fontFamily: 'inherit',
  transition: 'border-color 0.3s'
};

export default ContactPage;
