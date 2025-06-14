import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoBuildOutline, IoVideocamOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const { t } = useTranslation();
  const rental = t('services.rental', { returnObjects: true });
  const production = t('services.production', { returnObjects: true });

  return (
    <section id="services" className="services">
      <div className="services__container">
        <h2 className="services__title">{t('services.title')}</h2>

        <div className="services__grid">
          {[rental, production].map((svc, i) => (
            <motion.div
              className="services__card"
              key={i}
              whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="services__header">
                {i === 0 ? (
                  <IoBuildOutline className="services__icon" />
                ) : (
                  <IoVideocamOutline className="services__icon" />
                )}
                <h3 className="services__card-title">{svc.title}</h3>
              </div>
              <ul className="services__list">
                {Object.values(svc.features).map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
