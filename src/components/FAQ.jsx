// src/components/FAQ.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoHelpCircleOutline, IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
  const { t } = useTranslation();
  const items = t('faq.items', { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq">
      <h2 className="faq__title">{t('faq.title')}</h2>
      <div className="faq__list">
        {items.map((item, idx) => (
          <div className={`faq__item ${openIndex === idx ? 'open' : ''}`} key={idx}>
            <button
              className="faq__question"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <div className="faq__question-text">
                <IoHelpCircleOutline className="faq__icon" />
                <span>{item.q}</span>
              </div>
              {openIndex === idx ? (
                <IoChevronUp className="faq__chevron" />
              ) : (
                <IoChevronDown className="faq__chevron" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  className="faq__answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
