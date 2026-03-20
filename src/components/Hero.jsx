import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import './Hero.css';
import './FloatingWhatsapp.css';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const EFFECT = 'stagger';
  const fullText = 'MAESTRO STUDIO';
  const isRtl = i18n.dir(i18n.language) === 'rtl';

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [doneTyping, setDoneTyping] = useState(EFFECT !== 'type');

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
      }, 55);

      return () => clearTimeout(timeout);
    }

    setDoneTyping(true);
  }, [index, prefersReducedMotion]);

  const letters = useMemo(() => fullText.split(''), []);

  const container = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
          ? { duration: 0.2 }
          : {
            duration: 0.5,
            ease: 'easeOut',
            staggerChildren: 0.045,
            delayChildren: 0.15,
          },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 24,
      rotateX: prefersReducedMotion ? 0 : 65,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
      <section className="hero-wrapper" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="hero-bg-orb hero-bg-orb--1" aria-hidden="true" />
        <div className="hero-bg-orb hero-bg-orb--2" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <motion.div
            className="hero"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
          >
            cinematic visuals • premium production • bold identity
          </motion.div>

          {EFFECT === 'stagger' ? (
              <motion.h1
                  className="hero__title gradient-text shimmer"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  aria-label={fullText}
                  dir="ltr"
              >
            <span className="hero__title-line">
              {letters.slice(0, 7).map((ch, i) => (
                  <motion.span
                      className="letter"
                      key={`maestro-${ch}-${i}`}
                      variants={child}
                      aria-hidden="true"
                  >
                    {ch}
                  </motion.span>
              ))}
            </span>

                <span className="hero__title-line">
              {letters.slice(8).map((ch, i) => (
                  <motion.span
                      className="letter"
                      key={`studio-${ch}-${i}`}
                      variants={child}
                      aria-hidden="true"
                  >
                    {ch}
                  </motion.span>
              ))}
            </span>
              </motion.h1>
          ) : (
              <motion.h1
                  className={`hero__title gradient-text typing-title ${doneTyping ? 'done' : ''}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  dir="ltr"
              >
                <span className="hero__title-fixed">{displayedText}</span>
                {!prefersReducedMotion && <span className="cursor">|</span>}
              </motion.h1>
          )}

          <motion.p
              className="hero__lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.55 }}
          >
            {t(
                'hero.lead',
                'Visual storytelling, stage energy, production design, and digital presence built to hit hard and stay in memory.'
            )}
          </motion.p>

          <motion.p
              className="hero__text"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t('hero.text')}
          </motion.p>

          <motion.div
              className="hero__highlights"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.5 }}
          >
          <span className="hero__chip">
            {t('hero.highlight1', 'creative direction')}
          </span>
            <span className="hero__chip">
            {t('hero.highlight2', 'photo & video production')}
          </span>
            <span className="hero__chip">
            {t('hero.highlight3', 'brand atmosphere')}
          </span>
          </motion.div>

          <motion.a
              href={t('hero.ctaLink')}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-button"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.03, y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.45 }}
          >
            <FaWhatsapp className="hero__whatsapp-icon" />
            {t('hero.button')}
          </motion.a>
        </motion.div>
      </section>
  );
}