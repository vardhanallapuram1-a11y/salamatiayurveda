import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';

const ProductsPage = () => (
  <main style={{ marginTop: '100px' }}>
    {/* Page Banner */}
    <div style={{ background: 'var(--green)', padding: '40px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 7vw, 36px)', marginBottom: '8px' }}>
        Our Products
      </h1>

    </div>

    <section className="products-section">
      <div className="container">
        <div className="section-title">
          <h2>All Products</h2>
          <div className="title-underline"></div>
        </div>

        <div className="products-grid">
          {productsData.map((p, i) => (
            <div className="product-card" key={p.id || i}>
              <Link to={`/product/${p.id}`} className="product-image-wrap">
                <div className="on-sale-badge">On Sale</div>
                <img src={p.image} alt={p.name} loading="lazy" />
              </Link>
              <h3><Link to={`/product/${p.id}`}>{p.name}</Link></h3>
              <div className="product-price">
                <del>{p.original}</del>
                <span className="current">{p.current}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default ProductsPage;
