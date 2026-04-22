import useScrollReveal from '../hooks/useScrollReveal';
import certImg from '../assets/imgs/Alma Shakti Capsule N.png';

const CertificationSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="certification-section" style={{ background: '#fff', padding: '60px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 
          ref={ref} 
          className={`reveal ${isVisible ? 'revealed' : ''}`}
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '32px', 
            fontWeight: 800, 
            color: '#1a5c2a', 
            marginBottom: '40px' 
          }}
        >
          Our Certification
        </h2>
        <div 
          className={`reveal ${isVisible ? 'revealed' : ''} delay-200`}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <img 
            src={certImg} 
            alt="Our Certification" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      </div>
    </section>
  );
};


export default CertificationSection;
