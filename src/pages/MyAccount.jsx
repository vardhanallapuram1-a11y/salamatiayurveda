import React from 'react';

const MyAccount = () => (
  <main style={{ marginTop: '80px' }}>
    <div style={{ background: 'var(--green)', padding: '40px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '8px' }}>
        My Account
      </h1>

    </div>

    <section style={{ padding: '80px 0', background: '#f5f5f5' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Login */}
          <div style={{ background: '#fff', padding: '40px', borderRadius: '4px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', color: 'var(--green)', marginBottom: '24px' }}>Login</h2>
            <form onSubmit={e => e.preventDefault()}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Username or email address *</label>
                <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} required />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Password *</label>
                <input type="password" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} required />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" style={{ fontSize: '14px' }}>Remember me</label>
              </div>
              <button type="submit" style={{ background: 'var(--green)', color: '#fff', width: '100%', padding: '14px', border: 'none', borderRadius: '4px', fontWeight: 700, cursor: 'pointer' }}>
                Log in
              </button>
              <p style={{ marginTop: '16px', fontSize: '14px' }}>
                <a href="#" style={{ color: 'var(--green)', textDecoration: 'none' }}>Lost your password?</a>
              </p>
            </form>
          </div>

          {/* Register */}
          <div style={{ background: '#fff', padding: '40px', borderRadius: '4px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', color: 'var(--green)', marginBottom: '24px' }}>Register</h2>
            <form onSubmit={e => e.preventDefault()}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Email address *</label>
                <input type="email" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} required />
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '24px' }}>
                A link to set a new password will be sent to your email address.
              </p>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '24px' }}>
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="/privacy-policy" style={{ color: 'var(--green)' }}>privacy policy</a>.
              </p>
              <button type="submit" style={{ background: 'var(--green)', color: '#fff', width: '100%', padding: '14px', border: 'none', borderRadius: '4px', fontWeight: 700, cursor: 'pointer' }}>
                Register
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  </main>
);

export default MyAccount;
