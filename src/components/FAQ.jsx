import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    IoHelpCircleOutline,
    IoChevronDown,
} from 'react-icons/io5';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    const { t, i18n } = useTranslation();
    const prefersReducedMotion = useReducedMotion();
    const items = t('faq.items', { returnObjects: true });
    const [openIndex, setOpenIndex] = useState(0);
    const isRtl = i18n.dir(i18n.language) === 'rtl';

    return (
        <section id="faq" className="faq" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="faq__container">
                <div className="faq__eyebrow">
                    {t('faq.eyebrow', 'clear answers • smooth process • zero friction')}
                </div>

                <h2 className="faq__title">
                    {t('faq.title', 'Frequently Asked Questions')}
                </h2>

                <p className="faq__subtitle">
                    {t(
                        'faq.subtitle',
                        'Everything you need to know before booking — simple, clear, and built to save time.'
                    )}
                </p>

                <div className="faq__list">
                    {items.map((item, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <motion.div
                                key={idx}
                                className={`faq__item ${isOpen ? 'open' : ''}`}
                                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                            >
                                <button
                                    className="faq__question"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${idx}`}
                                    id={`faq-question-${idx}`}
                                    type="button"
                                >
                                    <div className="faq__question-text">
                                        <div className="faq__icon-wrap" aria-hidden="true">
                                            <IoHelpCircleOutline className="faq__icon" />
                                        </div>

                                        <span className="faq__question-label">{item.q}</span>
                                    </div>

                                    <IoChevronDown className={`faq__chevron ${isOpen ? 'is-open' : ''}`} />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-answer-${idx}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${idx}`}
                                            className="faq__answer"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.32, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="faq__answer-inner">
                                                <p>{item.a}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;