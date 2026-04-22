import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/productsData';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);

  return (
    <main style={{ marginTop: '80px' }}>
      <div style={{ background: 'var(--green)', padding: '40px 0', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '32px', marginBottom: '8px' }}>
          {product.name}
        </h1>

      </div>

      <section style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            
            {/* Left: Product Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', left: '20px', background: '#e2ab34', color: '#fff', padding: '5px 15px', fontWeight: 700, fontSize: '13px', borderRadius: '4px', zIndex: 2 }}>
                ON SALE
              </div>
              <img 
                src={product.image || 'https://via.placeholder.com/600x600?text=Salamati+Product'} 
                alt={product.name} 
                style={{ width: '100%', borderRadius: '8px', border: '1px solid #eee' }} 
              />
            </div>

            {/* Right: Info */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: 'var(--green)', marginBottom: '16px' }}>
                {product.name}
              </h2>
              <div style={{ marginBottom: '24px' }}>
                <del style={{ color: '#888', fontSize: '20px', marginRight: '16px' }}>{product.original}</del>
                <span style={{ color: '#e2ab34', fontSize: '32px', fontWeight: 700 }}>{product.current}</span>
              </div>

              <div style={{ marginBottom: '32px', lineHeight: 1.8, color: '#555' }}>
                <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Overview</h3>
                <p>{product.overview}</p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Key Benefits</h3>
                <ul style={{ paddingLeft: '20px' }}>
                  {product.benefits.map((b, i) => (
                    <li key={i} style={{ marginBottom: '8px', color: '#555' }}>{b}</li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Usage</h3>
                <p style={{ color: '#555' }}>{product.usage}</p>
              </div>

              <a 
                href={`https://wa.me/917428526936?text=I am interested in ${product.name}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'block',
                  background: 'var(--green)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '18px',
                  borderRadius: '4px',
                  fontWeight: 700,
                  fontSize: '18px',
                  textDecoration: 'none'
                }}
              >
                Inquiry on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
