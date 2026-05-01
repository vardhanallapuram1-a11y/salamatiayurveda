import React from 'react';
import aboutImg from '../assets/about_illustration.png';
import CtaSection from '../components/CtaSection';
import CertificationSection from '../components/CertificationSection';

const AboutPage = () => (
  <main style={{ marginTop: '80px' }}>
    {/* Page Banner */}
    <div style={{ background: 'var(--green)', padding: '40px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '8px' }}>
        About Us
      </h1>

    </div>

    {/* About Hero */}
    <section style={{ background: '#fff', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="about-inner">
          <div className="about-image">
            <img src={aboutImg} alt="About Salamati Ayurveda Pvt Ltd" />
          </div>
          <div className="about-content">
            <p className="subtitle">Best Ayurveda Company</p>
            <h2>SALAMATI AYURVEDA PVT LTD</h2>
            <div className="gold-line"></div>
            <p>
              Salamati Ayurveda Pvt Ltd is the best company in India for helping people feel healthy.
              Salamati Ayurveda Pvt Ltd uses old Indian health ideas in a new way. They make pills that
              are easy to take and don't taste bad. These pills have special mixes of herbs that
              are good for your whole body.
            </p>
            <p>
              Many people today find it hard to use old health treatments. But Salamati Ayurveda Pvt Ltd
              makes it easy. Their pills don't taste like herbs, so even kids can take them.
              This smart idea helps everyone use the good parts of old Indian health wisdom.
              With Salamati Ayurveda Pvt Ltd, you can use nature's way of staying healthy in a way that
              fits your busy life today. This can help you have a better and more balanced future.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Full About Content */}
    <section style={{ background: '#f5f5f5', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-title">
          <h2>Our Story</h2>
          <div className="title-underline"></div>
        </div>
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px', color: '#555', lineHeight: 1.9 }}>
          <p>
            Salamati Ayurveda Pvt Ltd stands out as India's top company for helping people achieve and
            maintain good health. In a world where many are searching for natural and holistic ways
            to improve their well-being, Salamati Ayurveda Pvt Ltd offers a unique blend of ancient wisdom
            and modern convenience.
          </p>
          <p>
            Ayurveda, which means "the science of life" in Sanskrit, is a traditional Indian system
            of medicine that has been practiced for thousands of years. It focuses on creating balance
            in the body, mind, and spirit to promote overall health and prevent illness. Salamati
            Ayurveda has taken this time-tested knowledge and adapted it to fit the needs of today's
            fast-paced world.
          </p>
          <p>
            One of the biggest challenges people face when trying to use traditional Ayurvedic remedies
            is the taste and smell of many herbal preparations. Often, these remedies come in the form
            of bitter-tasting powders or strong-smelling oils. Salamati Ayurveda Pvt Ltd has solved this problem
            by creating pills and tablets that contain all the benefits of Ayurvedic herbs without the
            unpleasant taste or smell.
          </p>
          <p>
            These innovative pills and tablets are made using special mixtures of herbs that work together
            to support the whole body. By combining these herbs in carefully crafted formulas, Salamati
            Ayurveda creates products that address various aspects of health and wellness. The convenience
            of these pills can't be overstated — it's as simple as taking a pill with breakfast or before
            bed.
          </p>
          <p>
            Another significant advantage of Salamati Ayurveda Pvt Ltd's approach is that it makes Ayurvedic
            remedies accessible to people of all ages. Children, who might resist taking bitter-tasting
            herbal preparations, can now easily swallow a small pill or chewable tablet. This means that
            families can adopt an Ayurvedic approach to health together.
          </p>
          <p>
            The company's commitment to quality is evident in every aspect of their product development.
            They source the highest quality herbs, many of which are grown using traditional and sustainable
            farming methods. These herbs are then processed using both time-honored techniques and modern
            technology to ensure that their beneficial properties are preserved.
          </p>
          <p>
            Education is another key component of Salamati Ayurveda Pvt Ltd's mission. Along with their products,
            they provide extensive information about Ayurvedic principles and how to incorporate them into
            daily life. This empowers consumers to take a more active role in their health.
          </p>
        </div>
      </div>
    </section>
    <CtaSection />
    <CertificationSection />
  </main>
);

export default AboutPage;
