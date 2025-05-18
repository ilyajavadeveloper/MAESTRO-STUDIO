// src/components/FAQ.jsx
import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <h2>Часто задаваемые вопросы / Frequently Asked Questions</h2>

      <div className="faq-list">
        <div className="faq-item">
          <strong>Как записаться? / How to book?</strong>
          <p>Обратитесь напрямую по номеру или WhatsApp: 052-438-8967</p>
        </div>

        <div className="faq-item">
          <strong>Сколько стоит аренда студии? / What’s the studio rental price?</strong>
          <p>Прайс-лист доступен в нашем Instagram.</p>
        </div>

        <div className="faq-item">
          <strong>Можно прийти со своей командой? / Can I bring my own team?</strong>
          <p>Конечно. Вы можете использовать как своё оборудование, так и наше.</p>
        </div>

        <div className="faq-item">
          <strong>Где находится студия? / Where are you located?</strong>
          <p>Мы находимся в Ашдоде, Sderot Yerushalayim 18, здание K-Towers, 4 этаж.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
