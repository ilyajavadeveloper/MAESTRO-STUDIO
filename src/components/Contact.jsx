import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoLogoWhatsapp, IoLocationSharp } from 'react-icons/io5';
import { motion, useReducedMotion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const prefersReducedMotion = useReducedMotion();
    const isRtl = i18n.dir(i18n.language) === 'rtl';

    const contacts = [
        {
            Icon: IoLogoWhatsapp,
            id: 'whatsapp',
            label: t('contact.whatsappLabel', 'WhatsApp'),
            link: 'https://wa.me/972524388967',
            text: t('contact.whatsappText', '+972 52 438 8967')
        },
        {
            Icon: IoLocationSharp,
            id: 'address',
            label: t('contact.addressLabel', 'Address'),
            link: 'https://www.google.com/maps/search/?api=1&query=Ashdod,+Sderot+Yerushalayim+18,+K-Towers,+4th+Floor',
            text: t(
                'contact.addressText',
                'Ashdod, Sderot Yerushalayim 18, K-Towers, 4th Floor'
            )
        }
    ];

    return (
        <section id="contact" className="contact" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="contact__container">
                <div className="contact__eyebrow">
                    {t('contact.eyebrow', 'fast response • direct access • premium support')}
                </div>

                <h2 className="contact__title">
                    {t('contact.title', 'Contacts')}
                </h2>

                <p className="contact__subtitle">
                    {t(
                        'contact.subtitle',
                        'Reach out directly for bookings, questions, location details, and production inquiries.'
                    )}
                </p>

                <div className="contact__grid">
                    {contacts.map(({ Icon, id, label, link, text }) => (
                        <motion.a
                            key={id}
                            href={link}
                            className={`contact__card contact__card--${id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        >
                            <div className="contact__icon-wrap" aria-hidden="true">
                                <Icon className="contact__icon" />
                            </div>

                            <div className="contact__info">
                                <span className="contact__label">{label}</span>
                                <span className="contact__text">{text}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <p className="contact__footer">
                    {t('hero.byline', 'by Maestro Prod.')}
                </p>
            </div>
        </section>
    );
};

export default Contact;