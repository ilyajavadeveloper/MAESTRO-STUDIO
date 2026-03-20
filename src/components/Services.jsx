import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoBuildOutline, IoVideocamOutline } from 'react-icons/io5';
import { motion, useReducedMotion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const isRtl = i18n.dir(i18n.language) === 'rtl';

  const rental = t('services.rental', { returnObjects: true });
  const production = t('services.production', { returnObjects: true });

  const services = [
    {
      ...rental,
      Icon: IoBuildOutline,
    },
    {
      ...production,
      Icon: IoVideocamOutline,
    },
  ];

  return (
      <section id="services" className="services" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="services__container">
          <div className="services__eyebrow">
            {t('services.eyebrow', 'premium setup • clean production • bold results')}
          </div>

          <h2 className="services__title">
            {t('services.title', 'Our Services')}
          </h2>

          <p className="services__subtitle">
            {t(
                'services.subtitle',
                'From studio rental to full production, everything is built to look sharp, feel premium, and work without friction.'
            )}
          </p>

          <div className="services__grid">
            {services.map((svc, i) => {
              const Icon = svc.Icon;

              return (
                  <motion.article
                      key={i}
                      className="services__card"
                      whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  >
                    <div className="services__header">
                      <div className="services__icon-wrap">
                        <Icon className="services__icon" />
                      </div>

                      <h3 className="services__card-title">{svc.title}</h3>
                    </div>

                    <ul className="services__list">
                      {Object.values(svc.features || {}).map((feat, idx) => (
                          <li key={idx} className="services__item">
                            <span className="services__bullet" aria-hidden="true" />
                            <span className="services__item-text">{feat}</span>
                          </li>
                      ))}
                    </ul>
                  </motion.article>
              );
            })}
          </div>
        </div>
      </section>
  );
}