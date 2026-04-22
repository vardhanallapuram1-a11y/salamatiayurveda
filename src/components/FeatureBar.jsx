import React from 'react';

const FeatureBar = () => (
  <section className="feature-bar">
    <div className="container">

      {/* Home delivery */}
      <div className="feature-item">
        <div className="feature-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="20" width="40" height="28" rx="2"/>
            <path d="M44 28h8l8 12v8h-16V28z"/>
            <circle cx="16" cy="52" r="6"/>
            <circle cx="48" cy="52" r="6"/>
            <path d="M4 34h40"/>
            <path d="M28 28v8"/>
            {/* checkmark on truck */}
            <polyline points="8,28 14,34 24,22" strokeWidth="2.5" stroke="#7bc447" fill="none"/>
          </svg>
        </div>
        <h4>Home delivery</h4>
      </div>

      {/* Order online */}
      <div className="feature-item">
        <div className="feature-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="4" width="40" height="52" rx="3"/>
            <line x1="22" y1="20" x2="42" y2="20"/>
            <line x1="22" y1="30" x2="42" y2="30"/>
            <line x1="22" y1="40" x2="34" y2="40"/>
            {/* Hand pointer */}
            <path d="M36 44 Q40 36 44 40 Q48 44 44 52 L36 52 Z"/>
          </svg>
        </div>
        <h4>Order online</h4>
      </div>

      {/* Everyday promotions */}
      <div className="feature-item">
        <div className="feature-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 4 L36 20 L52 20 L40 30 L44 46 L32 36 L20 46 L24 30 L12 20 L28 20 Z" strokeWidth="0" fill="#7bc447"/>
            <path d="M8 8 L56 8 L56 56 L8 56 Z" fill="none" strokeWidth="1.5"/>
            <text x="10" y="40" fontSize="20" fontWeight="bold" fill="#7bc447" stroke="none" fontFamily="sans-serif">%</text>
            <path d="M14 14 L50 14 Q54 14 54 18 L54 50 Q54 54 50 54 L14 54 Q10 54 10 50 L10 18 Q10 14 14 14" fill="none" strokeWidth="2"/>
            {/* Price tag shape */}
            <path d="M8 32 L32 8 L56 8 L56 32 L32 56 Z" fill="#7bc447" opacity="0.15" strokeWidth="0"/>
            <circle cx="44" cy="20" r="5" fill="none" strokeWidth="2" stroke="#7bc447"/>
            <line x1="20" y1="44" x2="44" y2="20" strokeWidth="2" stroke="#7bc447"/>
            <circle cx="20" cy="44" r="5" fill="none" strokeWidth="2" stroke="#7bc447"/>
          </svg>
        </div>
        <h4>Everyday promotions</h4>
      </div>
    </div>

    {/* Bottom wave */}
    <div className="feature-wave">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"/>
      </svg>
    </div>
  </section>
);

export default FeatureBar;
