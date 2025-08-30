// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import './NavBar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        {/* ЛОГО */}
        <div className="navbar__left">
          <a href="/" className="navbar__logo" aria-label="Maestro Studio Home">
            MAESTROSTUDIO
          </a>
        </div>

        {/* Десктоп нав */}
        <nav className="navbar__nav-desktop" aria-label="Primary">
          <Link to="hero" smooth offset={-70} duration={500}>{t('navbar.home')}</Link>
          <Link to="gallery" smooth offset={-70} duration={500}>{t('navbar.gallery')}</Link>
          <Link to="services" smooth offset={-70} duration={500}>{t('navbar.services')}</Link>
          <Link to="faq" smooth offset={-70} duration={500}>{t('navbar.faq')}</Link>
          <a href="https://maestro-web-nine.vercel.app/" target="_blank" rel="noreferrer">MAESTROWEB</a>
        </nav>

        {/* Правый блок */}
        <div className="navbar__right-desktop">
          <LanguageSwitcher />
        </div>

        {/* Бургер */}
        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div>

      {/* Мобильное меню */}
      <div id="mobile-menu" className={`navbar__menu-wrapper ${menuOpen ? 'open' : ''}`}>
        <nav className="navbar__menu" aria-label="Mobile">
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
