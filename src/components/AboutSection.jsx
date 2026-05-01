import React from 'react';
import { motion } from 'framer-motion';
import aboutIllustration from '../assets/imgs/yogaa.jpg';

const AboutSection = () => (
  <section className="about-section" id="about" style={{ overflow: 'hidden' }}>
    <div className="container">
      <div className="about-inner">

        {/* Left: Illustration */}
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={aboutIllustration}
            alt="About Salamati Ayurveda"
          />
        </motion.div>

        {/* Right: Content — exact text from salamatiayurveda.com/about-us/ */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="subtitle">Best Ayurveda Company</p>
          <h2>SALAMATI AYURVEDA</h2>
          <div className="gold-line"></div>
          <p>
            Salamati Ayurveda is the best company in India for helping people feel healthy.
            Salamati Ayurveda uses old Indian health ideas in a new way. They make pills that
            are easy to take and don't taste bad. These pills have special mixes of herbs that
            are good for your whole body.
          </p>
          <p>
            Many people today find it hard to use old health treatments. But Salamati Ayurveda
            makes it easy. Their pills don't taste like herbs, so even kids can take them.
            This smart idea helps everyone use the good parts of old Indian health wisdom.
          </p>
          <p>
            With Salamati Ayurveda, you can use nature's way of staying healthy in a way that
            fits your busy life today. This can help you have a better and more balanced future.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
