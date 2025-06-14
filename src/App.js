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
import AccessibilityWidget from './components/AccessibilityWidjet';


function App() {
  const { i18n } = useTranslation(); // Инициализируем хук useTranslation

  useEffect(() => {
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n.language, i18n]); // добавляем i18n в зависимости
  
  return (
    <div>
      <Navbar />

    
      {/* Основные секции сайта */}
      <Hero />
      <Gallery />
      <Services />
      <FAQ />
      <Contact />
<AccessibilityWidget/>

      <Footer />
      
    </div>
  );
}

export default App;