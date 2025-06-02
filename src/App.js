// src/App.js
import React, { useEffect } from 'react'; // Импортируем useEffect
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

import './i18n';
import './components/Responsive.css';

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Вместо NaGiShoot импортируем наш общий AccessibilityMenu
import AccessibilityMenu from './components/AccessibilityMenu';

function App() {
  const { i18n } = useTranslation(); // Инициализируем хук useTranslation

  useEffect(() => {
    // Устанавливаем атрибут dir на HTML-элементе при изменении языка
    // i18n.dir() возвращает 'rtl' для RTL языков (как 'he') и 'ltr' для LTR языков (как 'en', 'ru')
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n.language]); // Эффект будет запускаться при смене языка

  return (
    <div>
      <Navbar />

    
      {/* Основные секции сайта */}
      <Hero />
      <Gallery />
      <Services />
      <FAQ />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;