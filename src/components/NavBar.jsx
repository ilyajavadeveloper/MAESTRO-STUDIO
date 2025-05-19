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
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">MAESTROSTUDIO</div>

        {/* Кнопка видна только на десктопе */}
        <a href="https://wa.me/972524388967" className="navbar__cta navbar__cta--desktop">
          {t('navbar.book')}
        </a>
      </div>

      <div className="lang-desktop">
        <LanguageSwitcher />
      </div>

      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />
      </button>

      <div className={`navbar__menu-wrapper ${menuOpen ? 'open' : ''}`}>
        <nav className="navbar__menu">
          <Link to="hero" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            {t('navbar.home')}
          </Link>
          <Link to="gallery" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            {t('navbar.gallery')}
          </Link>
          <Link to="services" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            {t('navbar.services')}
          </Link>
          <Link to="faq" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            {t('navbar.faq')}
          </Link>
          <Link to="contact" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            {t('navbar.contact')}
          </Link>

          <div className="lang-mobile">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
