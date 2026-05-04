import React from 'react';

const RefundPolicy = () => (
  <main style={{ marginTop: '100px' }}>
    <div style={{ background: 'var(--green)', padding: '40px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '8px' }}>
        Cancellation and Refund
      </h1>
    </div>

    <section style={{ padding: '60px 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px', color: '#555', lineHeight: 1.8 }}>
        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Cancellation Policy</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li>Orders can be cancelled within 24 hours of placement.</li>
          <li>To cancel an order, please contact our customer support team at ayurvedasalamati@gmail.com or +91 7428526936.</li>
          <li>Cancellations will be processed within 48 hours of receiving the request.</li>
        </ul>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Refund Policy</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li>Refunds will be issued in the original payment method.</li>
          <li>Refunds will be processed within 7-10 business days of cancellation.</li>
          <li>Refunds will be for the full amount of the order, minus any shipping costs.</li>
        </ul>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Exceptions</h2>
        <p>No refunds or cancellations will be accepted for:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li>Opened or used products.</li>
          <li>Products that are damaged due to customer error.</li>
        </ul>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Return Policy</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li>If you receive a damaged or defective product, please contact our customer support team within 3 days of receipt.</li>
          <li>We will provide a replacement or refund, at our discretion.</li>
        </ul>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Contact Us</h2>
        <p>If you have any questions or concerns about our cancellation and refund policy, please don't hesitate to contact us at ayurvedasalamati@gmail.com. We're here to help.</p>
        <p>Thank you for choosing Salamati Ayurveda Pvt. Ltd!</p>
      </div>
    </section>
  </main>
);

export default RefundPolicy;
