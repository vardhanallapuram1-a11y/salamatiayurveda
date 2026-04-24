import React from 'react';
import Hero from '../components/Hero';
import FeatureBar from '../components/FeatureBar';
import ProductSection from '../components/ProductSection';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import TrustBar from '../components/TrustBar';
import CtaSection from '../components/CtaSection';
import HealthBenefitsSection from '../components/HealthBenefitsSection';
import CertificationSection from '../components/CertificationSection';

const HomePage = () => (
  <main>
    <Hero />
    <FeatureBar />
    <ProductSection preview />
    <AboutSection />
    <FaqSection />
    <TrustBar />
    <CtaSection />
    <HealthBenefitsSection />
    <CertificationSection />
  </main>
);


export default HomePage;
