import React, { useState, useEffect } from 'react';

import slide1 from '../assets/imgs/Slider-1.jpg';
import slide2 from '../assets/imgs/Slider-2.jpg';
import slide3 from '../assets/imgs/SLIDER-3.jpg';
import slide4 from '../assets/imgs/slider-4.jpg';

const slides = [slide1, slide2, slide3, slide4];
const extendedSlides = [...slides, slides[0]];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const prev = () => {
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(slides.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrent(slides.length - 1);
      }, 50);
    } else {
      setIsTransitioning(true);
      setCurrent(c => c - 1);
    }
  };

  const next = () => {
    setIsTransitioning(true);
    setCurrent(c => {
      if (c >= slides.length) return 1;
      return c + 1;
    });
  };

  useEffect(() => {
    if (current === slides.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [current]);

  useEffect(() => {
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-slider">
        <div
          className="hero-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {extendedSlides.map((src, i) => (
            <div key={i} className={`hero-slide ${current === i || (current === slides.length && i === 0) ? 'active' : ''}`}>
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
              className={`hero-dot ${(current === i) || (current === slides.length && i === 0) ? 'active' : ''}`}
              onClick={() => {
                setIsTransitioning(true);
                setCurrent(i);
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
