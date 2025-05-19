import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './NavBar.css';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">MAESTROSTUDIO</div>

      <LanguageSwitcher />

      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />
      </button>

      <nav className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
        <Link to="hero"    smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
          {t('navbar.home')}
        </Link>
        <Link to="gallery" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
          {t('navbar.gallery')}
        </Link>
        <Link to="services" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
          {t('navbar.services')}
        </Link>
        <Link to="faq"     smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
          {t('navbar.faq')}
        </Link>
        <Link to="contact" smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
          {t('navbar.contact')}
        </Link>
      </nav>

      <a
        href="https://wa.me/972524388967"
        className="navbar__cta"
      >
        {t('navbar.book')}
      </a>
    </header>
  );
};

export default Navbar;
