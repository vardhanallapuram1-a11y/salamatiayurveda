import React, { useState, useEffect } from 'react';

import slide1 from '../assets/imgs/Slider-1.jpg';
import slide2 from '../assets/imgs/Slider-2.jpg';
import slide3 from '../assets/imgs/SLIDER-3.jpg';
import slide4 from '../assets/imgs/slider-4.jpg';

const slides = [slide1, slide2, slide3, slide4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === slides.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-slider">
        <div 
          className="hero-track" 
          style={{ 
            transform: `translateX(-${current * 100}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {slides.map((src, i) => (
            <div key={i} className={`hero-slide ${current === i ? 'active' : ''}`}>
              <img src={src} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>


        <button className="hero-arrow prev" onClick={prev} aria-label="Previous">&#8249;</button>
        <button className="hero-arrow next" onClick={next} aria-label="Next">&#8250;</button>

        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${current === i ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
