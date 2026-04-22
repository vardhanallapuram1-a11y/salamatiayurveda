import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';
import useScrollReveal from '../hooks/useScrollReveal';

// Selectively pick products for different sections based on IDs
const latestProducts = productsData.filter(p => 
  ['tiger-shilajit-combo', 'night-power-capsules', 'shilajit-capsules-60', 'booster-tiger-basic'].includes(p.id)
);

const weeklyDeals = productsData.filter(p => 
  ['booster-tiger-premium', 'booster-tiger-basic', 'fat-burner-capsule', 'full-night-care-kit'].includes(p.id)
);

// Each card is its own component so the hook is called at the top level (Rules of Hooks)
const ProductCard = ({ p, index }) => {
  const [ref, isVisible] = useScrollReveal(0.1);
  const delayClass = `delay-${(index % 4) * 100 + 100}`;

  return (
    <div 
      ref={ref} 
      className={`product-card reveal ${isVisible ? 'revealed' : ''} ${delayClass}`} 
      key={p.id}
    >
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
  );
};

const ProductGrid = ({ products }) => (
  <div className="products-grid">
    {products.map((p, i) => (
      <ProductCard key={p.id} p={p} index={i} />
    ))}
  </div>
);

const ProductSection = ({ preview }) => {
  const [title1Ref, title1Visible] = useScrollReveal();
  const [title2Ref, title2Visible] = useScrollReveal();

  return (
    <section className="products-section" id="products">
      <div className="container">

        {/* Section 1: The latest products */}
        <div ref={title1Ref} className={`section-title reveal ${title1Visible ? 'revealed' : ''}`}>
          <h2>The latest products</h2>
          <div className="title-underline"></div>
        </div>
        <ProductGrid products={latestProducts} />

        {/* Section 2: Weekly deals */}
        <div ref={title2Ref} className={`section-title reveal ${title2Visible ? 'revealed' : ''}`} style={{ marginTop: '60px' }}>
          <h2>Weekly deals</h2>
          <div className="title-underline"></div>
        </div>
        <ProductGrid products={weeklyDeals} />

        {/* On homepage show "See more products" button */}
        {preview && (
          <div className="see-more-wrap">
            <Link to="/products" className="btn-see-more">See more products</Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductSection;
