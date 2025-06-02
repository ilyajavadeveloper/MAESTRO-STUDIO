// src/components/Contact.jsx
import React from 'react';
import { IoLogoWhatsapp, IoLocationSharp } from 'react-icons/io5';
import './Contact.css';

const contacts = [
  {
    Icon: IoLogoWhatsapp,
    id: 'whatsapp',
    label: 'WhatsApp',
    link: 'https://wa.me/972524388967',
    text: '052-438-8967'
  },
  {
    Icon: IoLocationSharp,
    id: 'address',
    label: 'Address',
    link: 'https://www.google.com/maps/search/?api=1&query=Ashdod,+Sderot+Yerushalayim+18,+K-Towers,+4th+Floor',
    text: 'Ashdod, Sderot Yerushalayim 18, K-Towers, 4th Floor'
  }
];

const Contact = () => (
  <section id="contact" className="contact">
    <h2 className="contact__title">Контакты / Contact</h2>
    <div className="contact__grid">
      {contacts.map(({ Icon, id, label, link, text }) => (
        <a
          key={id}
          href={link}
          className={`contact__card contact__card--${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact__icon">
            <Icon size="2.5rem" />
          </div>
          <div className="contact__info">
            <span className="contact__label">{label}:</span>
            <span className="contact__text">{text}</span>
          </div>
        </a>
      ))}
    </div>
    <p className="contact__footer">By Maestro Prod.</p>
  </section>
);

export default Contact;
