import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import './FloatingWhatsapp.css';

const container = {
  visible: { transition: { staggerChildren: 0.05 } }
};
const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <small className="hero__byline">{t('hero.byline')}</small>

      <motion.h1
        className="hero__title"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {t('hero.title').split('').map((char, i) => (
          <motion.span key={i} variants={child} className="letter">
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
        {t('hero.text')}
      </motion.p>

      <motion.a
        href={t('hero.ctaLink')}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button hero-cta"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        {t('hero.button')}
      </motion.a>
    </motion.section>
  );
};

export default Hero;
