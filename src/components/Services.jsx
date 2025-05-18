// src/components/Services.jsx
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Наши услуги / Our Services</h2>

      <div className="services-grid">
        <div className="service-card">
          <h3>Аренда студии и оборудования / Studio & Equipment Rental</h3>
          <ul>
            <li>Почасовая аренда студии / Hourly studio rental</li>
            <li>Аренда света, камер, микрофонов / Lights, cameras, mics</li>
            <li>Помощь с настройкой и подготовкой / Setup assistance</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Съёмка под ключ / Full Production Services</h3>
          <ul>
            <li>Подкасты / Podcasts (всё включено)</li>
            <li>Контент для соцсетей / Social content (Reels, Shorts)</li>
            <li>Предметная съёмка и портреты / Product & Portrait shoots</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
