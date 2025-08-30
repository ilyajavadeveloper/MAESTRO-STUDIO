import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import LanguageSwitcher from '../components/LanguageSwitcher.jsx';
import './Hero.css';
import './FloatingWhatsapp.css';

export default function Hero() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  // 🔧 Выбери эффект: 'stagger' | 'type'
  const EFFECT = 'stagger';

  const fullText = 'MAESTROSTUDIO';

  // ----- TYPE MODE (классическая печать, но быстрее)
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [doneTyping, setDoneTyping] = useState(EFFECT !== 'type'); // если не type — сразу done

  useEffect(() => {
    if (EFFECT !== 'type') return;
    if (prefersReducedMotion) {
      setDisplayedText(fullText);
      setDoneTyping(true);
      return;
    }
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((i) => i + 1);
      }, 55); // ⏩ ускорил с 100ms до ~55ms
      return () => clearTimeout(timeout);
    } else {
      setDoneTyping(true);
    }
  }, [index, EFFECT, prefersReducedMotion]);

  // ----- STAGGER MODE (современный по-буквенный reveal + shimmer)
  const letters = useMemo(() => fullText.split(''), [fullText]);
  const container = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0.2 }
        : { duration: 0.5, ease: 'easeOut', staggerChildren: 0.045, delayChildren: 0.15 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24, rotateX: prefersReducedMotion ? 0 : 65 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="hero-wrapper">
      <div className="language-container">
        <LanguageSwitcher />
      </div>

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {EFFECT === 'stagger' ? (
          <motion.h1
            className="hero__title gradient-text shimmer"
            variants={container}
            initial="hidden"
            animate="visible"
            aria-label={fullText}
          >
            {letters.map((ch, i) => (
              <motion.span className="letter" key={`${ch}-${i}`} variants={child} aria-hidden="true">
                {ch}
              </motion.span>
            ))}
          </motion.h1>
        ) : (
          <motion.h1
            className={`hero__title gradient-text typing-title ${doneTyping ? 'done' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {displayedText}
            {!prefersReducedMotion && <span className="cursor">|</span>}
          </motion.h1>
        )}

        <motion.p
          className="hero__text"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {t('hero.text')}
        </motion.p>

        <motion.a
          href={t('hero.ctaLink')}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta-button"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.45 }}
        >
          <FaWhatsapp className="hero__whatsapp-icon" />
          {t('hero.button')}
        </motion.a>
      </motion.div>
    </section>
  );
}
