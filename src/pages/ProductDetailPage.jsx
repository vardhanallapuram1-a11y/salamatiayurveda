import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, productsData } from '../data/productsData';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [activeTab, setActiveTab] = useState('description');

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main style={{ marginTop: '80px' }}>
      <div style={{ background: 'var(--green)', padding: '40px 0', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '32px', marginBottom: '8px' }}>
          {product.name}
        </h1>
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link> / 
          <Link to="/products" style={{ color: '#fff', textDecoration: 'none', marginLeft: '5px' }}>Products</Link> / 
          <span style={{ marginLeft: '5px' }}>{product.name}</span>
        </div>
      </div>

      <section style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '60px' }}>
            
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
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: 'var(--green)', marginBottom: '8px' }}>
                {product.name}
              </h2>
              <p style={{ color: '#888', marginBottom: '24px', fontSize: '14px' }}>Category: {product.category || 'Ayurvedic Medicine'}</p>
              
              <div style={{ marginBottom: '24px' }}>
                <del style={{ color: '#888', fontSize: '20px', marginRight: '16px' }}>{product.original}</del>
                <span style={{ color: '#e2ab34', fontSize: '32px', fontWeight: 700 }}>{product.current}</span>
              </div>

              <div style={{ marginBottom: '32px', lineHeight: 1.8, color: '#555' }}>
                <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Quick Overview</h3>
                <p>{product.overview}</p>
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
                  textDecoration: 'none',
                  transition: 'background 0.3s'
                }}
              >
                Inquiry on WhatsApp
              </a>
            </div>
          </div>

          {/* Description & Highlights Tabs */}
          <div style={{ borderTop: '1px solid #eee', paddingTop: '40px' }}>
            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px', borderBottom: '1px solid #eee' }}>
              <button 
                onClick={() => setActiveTab('description')}
                style={{
                  background: 'none', border: 'none', padding: '15px 0', fontSize: '18px', fontWeight: 700,
                  color: activeTab === 'description' ? 'var(--green)' : '#888',
                  borderBottom: activeTab === 'description' ? '3px solid var(--green)' : '3px solid transparent',
                  cursor: 'pointer'
                }}
              >
                Description
              </button>
            </div>

            <div style={{ padding: '20px 0' }}>
              {activeTab === 'description' && (
                <div style={{ color: '#555', lineHeight: 1.8 }}>
                  <p style={{ marginBottom: '30px' }}>{product.description}</p>
                  
                  <h4 style={{ color: 'var(--green)', fontSize: '20px', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>
                    Product Highlights:
                  </h4>
                  <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {(product.highlights || product.benefits).map((h, i) => (
                      <li key={i} style={{ marginBottom: '12px' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '80px' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', color: 'var(--green)', marginBottom: '40px', borderBottom: '2px solid #eee', paddingBottom: '15px' }}>
                Related products
              </h2>
              <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                {relatedProducts.map((p) => (
                  <div className="product-card" key={p.id}>
                    <Link to={`/product/${p.id}`} className="product-image-wrap">
                      <div className="on-sale-badge">On Sale</div>
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        style={{ width: '100%', maxHeight: '220px', objectFit: 'contain' }} 
                      />
                    </Link>
                    <h3 style={{ fontSize: '18px' }}><Link to={`/product/${p.id}`}>{p.name}</Link></h3>
                    <div className="product-price">
                      <del>{p.original}</del>
                      <span className="current" style={{ color: '#e2ab34' }}>{p.current}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
