import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from 'react-icons/fa'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import './Hero.css'
import './FloatingWhatsapp.css'

export default function Hero() {
  const { t } = useTranslation()
  const fullText = 'MAESTROSTUDIO'
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const [doneTyping, setDoneTyping] = useState(false)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[index])
        setIndex(i => i + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      setDoneTyping(true)
    }
  }, [index])

  return (
    <section className="hero-wrapper">
      <div className="language-container">
        <LanguageSwitcher />
      </div>

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className={`hero__title typing-title gradient-text ${doneTyping ? 'done' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {displayedText}
          <span className="cursor">|</span>
        </motion.h1>

        <motion.p
          className="hero__text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {t('hero.text')}
        </motion.p>

        <motion.a
          href={t('hero.ctaLink')}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <FaWhatsapp className="hero__whatsapp-icon" />
          {t('hero.button')}
        </motion.a>
      </motion.div>
    </section>
  )
}
