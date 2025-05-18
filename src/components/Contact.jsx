// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Контакты / Contact</h2>

      <div className="contact-box">
        <p>
          <strong>📱 WhatsApp:</strong>{' '}
          <a href="https://wa.me/972524388967" target="_blank" rel="noopener noreferrer">
            052-438-8967
          </a>
        </p>

        <p>
          <strong>📍 Адрес / Address:</strong><br />
          Ashdod, Sderot Yerushalayim 18, K-Towers, 4 этаж / 4th Floor
        </p>
      </div>

      <p className="footer-tagline">By Maestro Prod.</p>
    </section>
  );
};

export default Contact;
