import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import iconImg from '../assets/imgs/icon.png';

const TrustBar = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div style={{ background: '#0d2818', width: '100%', overflow: 'hidden' }}>
      <img 
        ref={ref}
        src={iconImg} 
        alt="Trust Banner" 
        className={`reveal-left ${isVisible ? 'revealed' : ''}`}
        style={{ width: '100%', height: 'auto', display: 'block' }} 
      />
    </div>
  );
};

export default TrustBar;
