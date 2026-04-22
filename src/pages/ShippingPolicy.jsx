import React from 'react';

const ShippingPolicy = () => (
  <main style={{ marginTop: '80px' }}>
    <div style={{ background: 'var(--green)', padding: '40px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '8px' }}>
        Shipping and Delivery
      </h1>
    </div>

    <section style={{ padding: '60px 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px', color: '#555', lineHeight: 1.8 }}>
        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Shipping Policy</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li>We offer shipping across India.</li>
          <li>Orders are typically processed within 24-48 hours of placement.</li>
          <li>Shipping rates and delivery times are as follows:
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li><strong>Standard Shipping:</strong> 3-7 business days across India.</li>
              <li><strong>Express Shipping:</strong> 1-3 business days (available for select pin codes).</li>
            </ul>
          </li>
        </ul>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Delivery Policy</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li>We strive to deliver your order within the estimated delivery time frame.</li>
          <li>Please note that delivery times may vary due to circumstances beyond our control, such as weather or traffic.</li>
          <li>If your order is lost or damaged during shipping, please contact our customer support team at ayurvedasalamati@gmail.com.</li>
        </ul>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Tracking Information</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li>You will receive tracking information via email or SMS once your order has shipped.</li>
          <li>You can use this tracking information to track the status of your order on our logistics partner's website.</li>
        </ul>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Delivery Areas</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li>We deliver to residential and commercial addresses.</li>
          <li>We do not deliver to PO boxes.</li>
        </ul>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>International Shipping</h2>
        <p>International shipping rates and delivery times vary. Please contact our customer support team for more information regarding availability in your region.</p>

        <p style={{ marginTop: '40px', fontWeight: 600 }}>Thank you for choosing Salamti Ayurveda!</p>
      </div>
    </section>
  </main>
);

export default ShippingPolicy;
