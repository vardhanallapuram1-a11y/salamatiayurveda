import React from 'react';

const MyAccount = () => (
  <main style={{ marginTop: '80px' }}>
    <div style={{ background: 'var(--green)', padding: '60px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#ebbf17', fontFamily: "'Playfair Display', serif", fontSize: '48px', fontWeight: 700, margin: 0 }}>
        My account
      </h1>
    </div>

    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          
          <div style={{ background: '#fff', padding: '0', borderRadius: '0' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', color: '#1a5c2a', marginBottom: '32px', fontWeight: 700 }}>Login</h2>
            <form onSubmit={e => e.preventDefault()}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', color: '#444' }}>Username or email address <span style={{ color: '#d9534f' }}>*</span></label>
                <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '0', background: '#f9f9f9' }} required />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', color: '#444' }}>Password <span style={{ color: '#d9534f' }}>*</span></label>
                <input type="password" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '0', background: '#f9f9f9' }} required />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <input type="checkbox" id="remember" style={{ width: '16px', height: '16px' }} />
                <label htmlFor="remember" style={{ fontSize: '15px', color: '#444' }}>Remember me</label>
              </div>
              <button type="submit" style={{ 
                background: '#ebbf17', 
                color: '#0d2818', 
                padding: '14px 40px', 
                border: 'none', 
                borderRadius: '4px', 
                fontWeight: 800, 
                fontSize: '15px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Log in
              </button>
              <p style={{ marginTop: '20px', fontSize: '15px' }}>
                <a href="#" style={{ color: '#ebbf17', textDecoration: 'none', fontWeight: 600 }}>Lost your password?</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>

  </main>
);

export default MyAccount;
