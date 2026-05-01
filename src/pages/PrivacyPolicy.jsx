import React from 'react';

const PrivacyPolicy = () => (
  <main style={{ marginTop: '100px' }}>
    <div style={{ background: 'var(--green)', padding: '40px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '8px' }}>
        Privacy Policy
      </h1>

    </div>

    <section style={{ padding: '60px 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px', color: '#555', lineHeight: 1.8 }}>
        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Introduction</h2>
        <p>Your privacy is critically important to us. At SALAMATI AYURVEDA PVT LTD we have a few fundamental principles:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li>We don't ask for your personal information unless we truly need it.</li>
          <li>We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
          <li>We don't store personal information on our servers unless required for the ongoing operation of one of our services.</li>
        </ul>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Information We Collect</h2>
        <p>We collect various types of information in connection with the services we provide, including:</p>
        <ol style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li><strong>Personal Information:</strong> This may include your name, email address, phone number, and payment information when you register, purchase products, or use our services.</li>
          <li><strong>Usage Data:</strong> We may collect information about how you access and interact with our website, including your IP address, browser type, operating system, referral URL, pages visited, and time spent on our site.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience on our site, track your browsing behaviour, and deliver personalized content and ads.</li>
        </ol>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>How We Use Your Information</h2>
        <p>We use the information we collect in the following ways:</p>
        <ol style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li><strong>To Provide and Improve Services:</strong> We use your information to deliver, maintain, and enhance our services.</li>
          <li><strong>Communication:</strong> We may use your email address to send you information, updates, and notifications about your account or transactions, or to respond to your inquiries.</li>
          <li><strong>Marketing:</strong> With your consent, we may send you promotional materials and offers related to our services.</li>
          <li><strong>Legal Compliance:</strong> We may disclose your information to comply with legal obligations, protect our rights, and prevent fraud or illegal activities.</li>
        </ol>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Data Security</h2>
        <p>We implement a variety of security measures to protect your personal information. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet or electronic storage is 100% secure.</p>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information at any time. You can also opt-out of receiving marketing communications from us. To exercise these rights, please contact us at ayurvedasalamati@gmail.com.</p>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. Any changes will be posted on this page, and we will notify you by email or through our website of any significant changes.</p>
      </div>
    </section>
  </main>
);

export default PrivacyPolicy;
