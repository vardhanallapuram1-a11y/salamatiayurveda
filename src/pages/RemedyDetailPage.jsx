import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { remediesData } from '../data/remediesData';

const RemedyDetailPage = () => {
  const { slug } = useParams();
  const remedy = remediesData.find(r => r.slug === slug || decodeURIComponent(r.slug) === slug);

  if (!remedy) {
    return <Navigate to="/home-remedies" replace />;
  }

  // Helper to safely render the formatted text (basic markdown-like newlines and bold)
  const renderContent = (text) => {
    if (!text) return <p style={{ color: 'red' }}>Content is currently unavailable or string is empty.</p>;

    return text.split('\n').map((line, i) => {
      let currentLine = line.trim();
      if (currentLine === '') return <br key={i} />;

      // Remove headings (replace #, ##, ###, #### with nothing)
      if (currentLine.match(/^#{1,6}\s+/)) {
        currentLine = currentLine.replace(/^#{1,6}\s+/, '');
        currentLine = `**${currentLine}**`; // make headings bold
      }

      // Handle bullets (* or -) -> render as bullet points
      let isBullet = false;
      if (currentLine.match(/^[-*]\s+/)) {
        currentLine = currentLine.replace(/^[-*]\s+/, '');
        isBullet = true;
      }

      // Simple parse for bold text
      const formattedLine = currentLine.split(/(\*\*.*?\*\*)/g).map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong style={{ color: '#0d2818' }} key={index}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', paddingLeft: '20px' }}>
            <span style={{ color: '#0d2818', fontWeight: 'bold' }}>•</span>
            <p style={{ margin: 0 }}>{formattedLine}</p>
          </div>
        );
      }

      return <p key={i} style={{ marginBottom: '12px' }}>{formattedLine}</p>;
    });
  };

  return (
    <main style={{ marginTop: '100px', background: '#fcfcfc', paddingBottom: '80px' }}>


      {/* Banner matching Image 2 */}
      <div style={{
        background: '#061e11',
        padding: '60px 20px',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontFamily: 'inherit',
          fontSize: 'clamp(28px, 5vw, 42px)',
          color: '#fbbf24',
          fontWeight: '700',
          margin: 0,
          lineHeight: 1.2
        }}>
          {remedy.title}
        </h1>
        {remedy.titleEn && (
          <p style={{
            color: 'rgba(251, 191, 36, 0.7)',
            marginTop: '12px',
            fontSize: '18px',
            fontStyle: 'italic'
          }}>
            {remedy.titleEn}
          </p>
        )}
      </div>

      <div className="container" style={{ maxWidth: '900px' }}>



        {/* Image */}
        <div style={{ marginBottom: '40px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <img
            src={remedy.img}
            alt={remedy.titleEn}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            onError={e => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* Content Body */}
        <div style={{
          color: '#444',
          fontSize: '16px',
          lineHeight: 1.8,
          background: '#fff',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
        }}>
          {renderContent(remedy.content)}
        </div>


        <div style={{ padding: '20px 0', borderTop: '1px solid #eee', marginTop: '20px' }}>
          <span style={{ fontWeight: 600, color: '#333' }}>Share</span> <span style={{ color: '#888', background: '#f5f5f5', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' }}>0</span>
        </div>

        {/* Reply Form */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ fontSize: '24px', fontFamily: "'Playfair Display', serif", marginBottom: '8px', color: '#1a5c2a' }}>Leave a Reply</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>Your email address will not be published. Required fields are marked *</p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={e => e.preventDefault()}>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 600, color: '#444' }}>Comment *</label>
              <textarea rows="6" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '15px', fontFamily: 'inherit' }}></textarea>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 30%', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 600, color: '#444' }}>Name *</label>
                <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '15px' }} />
              </div>
              <div style={{ flex: '1 1 30%', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 600, color: '#444' }}>Email *</label>
                <input type="email" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '15px' }} />
              </div>
              <div style={{ flex: '1 1 30%', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 600, color: '#444' }}>Website</label>
                <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '15px' }} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type="checkbox" id="save-info" />
              <label htmlFor="save-info" style={{ fontSize: '14px', color: '#555' }}>Save my name, email, and website in this browser for the next time I comment.</label>
            </div>

            <div style={{ marginTop: '10px' }}>
              <button
                type="submit"
                style={{ background: '#f1b317', color: '#0d2818', padding: '12px 30px', border: 'none', fontWeight: 700, textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer', fontFamily: "'Playfair Display', serif" }}
              >
                Post Comment
              </button>
            </div>

          </form>
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <Link to="/home-remedies" className="btn-see-more" style={{ display: 'inline-block', textDecoration: 'none' }}>
            ← Back to Home Remedies
          </Link>
        </div>

      </div>
    </main>
  );
};

export default RemedyDetailPage;