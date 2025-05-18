// src/components/Hero.jsx
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
  return (
    <section className="hero">
      <p className="tagline">by Maestro Prod.</p>
      <h1>MAESTROSTUDIO — your all-in-one creative studio and production space in the heart of Ashdod.</h1>
      <p>
        Situated on the 4th floor of the K-Towers Building, 18 Sderot Yerushalayim, our studio features a minimalist
        design and professional-grade lighting and sound — perfect for podcasts, reels, interviews, and more.
      </p>
      <WhatsAppButton />
    </section>
  );
};

export default Hero;
