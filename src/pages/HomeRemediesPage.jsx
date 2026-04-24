import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { remediesData } from '../data/remediesData';

// Icons
const IconHeart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f1b317" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const IconComment = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const IconRead = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d2818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const HomeRemediesPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const displayedRemedies = remediesData.slice(0, visibleCount);
  const hasMore = visibleCount < remediesData.length;

  return (
    <main style={{ marginTop: '80px' }}>
      <div style={{ background: 'var(--green)', padding: '50px 0', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '42px', marginBottom: '8px' }}>
          Home Remedies
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>Ayurvedic wisdom for common ailments</p>
      </div>

      <section style={{ background: '#f9fafb', padding: '60px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {displayedRemedies.map((r, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Image section */}
                <Link to={`/home-remedies/${r.slug}`} style={{ display: 'block', overflow: 'hidden', height: '220px' }}>
                  <img
                    src={r.img}
                    alt={r.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </Link>

                {/* Content section */}
                <div style={{ padding: '24px', flexGrow: 1 }}>
                  <Link to={`/home-remedies/${r.slug}`} style={{ textDecoration: 'none' }}>
                    <h2 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#166534',
                      marginBottom: '16px',
                      lineHeight: '1.2',
                      fontFamily: 'inherit'
                    }}>
                      {r.title}
                    </h2>
                  </Link>
                  <p style={{
                    fontSize: '15px',
                    color: '#4b5563',
                    lineHeight: '1.6',
                    marginBottom: '0'
                  }}>
                    {r.desc} [...]
                  </p>
                </div>

                {/* Footer section */}
                <div style={{
                  borderTop: '1px solid #f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    padding: '12px 24px',
                    borderRight: '1px solid #f3f4f6'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <IconHeart />
                      <span style={{ fontSize: '14px', color: '#374151' }}>0</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <IconComment />
                      <span style={{ fontSize: '14px', color: '#374151' }}>0</span>
                    </div>
                  </div>

                  <Link
                    to={`/home-remedies/${r.slug}`}
                    style={{
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      color: '#111827',
                      fontWeight: '600',
                      fontSize: '14px',
                      padding: '12px'
                    }}
                  >
                    <IconRead />
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <button
                onClick={loadMore}
                style={{
                  background: '#f1b317',
                  color: '#0d2818',
                  padding: '16px 40px',
                  borderRadius: '50px',
                  fontSize: '18px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Playfair Display', serif",
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
              >
                Load More Remedies
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default HomeRemediesPage;
