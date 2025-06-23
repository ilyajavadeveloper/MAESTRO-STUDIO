// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './NavBar.css';
import LanguageSwitcher from './LanguageSwitcher.jsx';


const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* ЛОГОТИП */}
        <div className="navbar__left">
          <div className="navbar__logo">MAESTROSTUDIO</div>
        </div>

        {/* НАВИГАЦИЯ — только на десктопе */}
        <nav className="navbar__nav-desktop">
          <Link to="hero" smooth offset={-70} duration={500}>{t('navbar.home')}</Link>
          <Link to="gallery" smooth offset={-70} duration={500}>{t('navbar.gallery')}</Link>
          <Link to="services" smooth offset={-70} duration={500}>{t('navbar.services')}</Link>
          <Link to="faq" smooth offset={-70} duration={500}>{t('navbar.faq')}</Link>
          <a
            href="https://maestro-web-nine.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            MAESTROWEB
          </a>
        </nav>

        {/* ПРАВЫЙ БЛОК — языки и бургер */}
        <div className="navbar__right-desktop">
          <LanguageSwitcher />
        </div>

        {/* БУРГЕР для мобилок */}
        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={`navbar__menu-wrapper ${menuOpen ? 'open' : ''}`}>
        <nav className="navbar__menu">
          <Link to="hero" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>{t('navbar.home')}</Link>
          <Link to="gallery" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>{t('navbar.gallery')}</Link>
          <Link to="services" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>{t('navbar.services')}</Link>
          <Link to="faq" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>{t('navbar.faq')}</Link>
          <a href="https://maestro-web-nine.vercel.app/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            MAESTROWEB
          </a>
          <div className="lang-mobile">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
