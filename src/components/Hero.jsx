import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import './FloatingWhatsapp.css';

const title = "MAESTROSTUDIO";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <small className="hero__byline">by Maestro Prod.</small>

      <motion.h1 className="hero__title" initial="hidden" animate="visible" variants={container}>
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={child} className="letter">
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="hero__text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Расположена на 4-м этаже K-Towers, Sderot Yerushalayim 18 — наша студия выполнена в минималистичном стиле, 
        с профессиональным светом и звуком. Идеально для подкастов, рилсов, интервью и не только.
        <br /><br />
        Located on the 4th floor of K-Towers, 18 Sderot Yerushalayim — our studio features minimalist design 
        and professional-grade lighting & sound. Perfect for podcasts, reels, interviews & more.
      </motion.p>

      <motion.a
        href="https://wa.me/972524388967"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button hero-cta"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        📩 Записаться / Book Now
      </motion.a>
    </motion.section>
  );
};

// Анимация по буквам
const container = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default Hero;

export const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/972524388967"
    className="floating-whatsapp"
    target="_blank"
    rel="noopener noreferrer"
  >
    💬
  </a>
);
