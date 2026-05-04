import React from 'react';

const TermsConditions = () => (
  <main style={{ marginTop: '100px' }}>
    <div style={{ background: 'var(--green)', padding: '40px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '8px' }}>
        Terms and Conditions
      </h1>
    </div>

    <section style={{ padding: '60px 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px', color: '#555', lineHeight: 1.8 }}>
        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Introduction</h2>
        <p>Welcome to Salamti Ayurveda. These terms and conditions outline the rules and regulations for the use of our website and services.</p>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Acceptance of Terms</h2>
        <p>By accessing or using our website, you agree to comply with and be bound by these terms and conditions. If you do not agree with these terms, you are not authorized to use our website.</p>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>User Responsibilities</h2>
        <ol style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li><strong>Account Registration:</strong> You may need to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
          <li><strong>Prohibited Conduct:</strong> You agree not to use our website or services for any unlawful or prohibited activities, including but not limited to:
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li>Engaging in any form of harassment, abuse, or spamming.</li>
              <li>Distributing viruses, malware, or harmful code.</li>
              <li>Violating any intellectual property rights.</li>
            </ul>
          </li>
          <li><strong>Content Submission:</strong> If you submit content to our website, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content in connection with our services.</li>
        </ol>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Payment and Billing</h2>
        <p>All fees and charges for our services are detailed on our website. Payments are due at the time of purchase unless otherwise specified. We reserve the right to change our fees and payment terms at any time.</p>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Limitation of Liability</h2>
        <p>Salamati Ayurveda Pvt. Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services. Our total liability to you for any claims related to our services is limited to the amount paid by you for those services.</p>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Termination</h2>
        <p>We reserve the right to terminate your access to our website and services at our sole discretion, without notice, if you violate these terms and conditions or engage in any conduct that we deem harmful or inappropriate.</p>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the relevant local laws. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts.</p>

        <h2 style={{ color: 'var(--green)', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Changes to Terms</h2>
        <p>We may update these terms and conditions from time to time. Any changes will be posted on this page, and your continued use of our website after any changes indicates your acceptance of the new terms.</p>
      </div>
    </section>
  </main>
);

export default TermsConditions;
