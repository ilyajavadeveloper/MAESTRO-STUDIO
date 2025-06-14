import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import LanguageSwitcher from '../components/LanguageSwitcher.jsx';
import './Hero.css';
import './FloatingWhatsapp.css';

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.6,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30, rotate: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        mass: 0.8,
      }
    }
  };

  return (
    <section className="hero-wrapper" style={{ backgroundColor: '#000' }}>
      {/* Языковой переключатель */}
      <div className="language-container">
        <LanguageSwitcher />
      </div>

      {/* Основной блок */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Подпись */}
        <motion.small
          className="hero__byline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t('hero.byline')}
        </motion.small>

        {/* Название MAESTROSTUDIO (не переводится) */}
        <motion.h1
  className="hero__title"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  dir="ltr" // 👈 вот это добавляем
>
  {'MAESTROSTUDIO'.split('').map((char, i) => (
    <motion.span key={i} variants={letterVariants} className="letter">
      {char}
    </motion.span>
  ))}
</motion.h1>
        {/* Текст под заголовком */}
        <motion.p
          className="hero__text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {t('hero.text')}
        </motion.p>

        {/* Кнопка WhatsApp */}
        <motion.a
          href={t('hero.ctaLink')}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <FaWhatsapp className="hero__whatsapp-icon" />
          {t('hero.button')}
        </motion.a>
      </motion.div>
    </section>
  );
}
