import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './NavBar.css'; // Убедись, что регистр файла CSS правильный (NavBar.css)
import LanguageSwitcher from './LanguageSwitcher.jsx';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Управляем прокруткой тела страницы при открытом/закрытом меню
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      {/* Основной контейнер для содержимого навбара */}
      <div className="navbar-container">
        {/* Логотип */}
        <div className="navbar__left">
          <div className="navbar__logo">MAESTROSTUDIO</div>
        </div>

        {/* Правая часть навбара на десктопе: только переключатель языка */}
        <div className="navbar__right-desktop">
          <LanguageSwitcher />
        </div>

        {/* Бургер-меню (видно только на мобильных) */}
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

      {/* Выпадающее меню (мобильное) */}
      <div className={`navbar__menu-wrapper ${menuOpen ? 'open' : ''}`}>
        <nav className="navbar__menu">
          <Link
            to="hero"
            smooth
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.home')}
          </Link>
          <Link
            to="gallery"
            smooth
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.gallery')}
          </Link>
          <Link
            to="services"
            smooth
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.services')}
          </Link>
          <Link
            to="faq"
            smooth
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.faq')}
          </Link>
          {/* Новая ссылка MAESTROWEBB справа от FAQ */}
          <a
            href="https://maestro-web-nine.vercel.app/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            MAESTROWEB
          </a>
          {/* Переключатель языка для мобильного меню */}
          <div className="lang-mobile">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
