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

    // Очистка эффекта при размонтировании компонента
    return () => {
      document.body.style.overflow = ''; // Восстанавливаем прокрутку при уходе со страницы
    };
  }, [menuOpen]); // Зависимость от состояния меню

  return (
    <header className="navbar">
      {/* Основной контейнер для содержимого навбара, управляет расположением элементов */}
      <div className="navbar-container">
        {/* Левая часть: логотип и кнопка "Book Now" для десктопа */}
        <div className="navbar__left">
          <div className="navbar__logo">MAESTROSTUDIO</div>
          {/* Кнопка "Book Now" видна только на десктопе */}
          <a
            href="https://wa.me/972524388967"
            className="navbar__cta navbar__cta--desktop"
            target="_blank"
            rel="noreferrer"
          >
            {t('navbar.book')}
          </a>
        </div>

        {/* Правая часть навбара на десктопе: ссылка MAESTROWEB и переключатель языка */}
        <div className="navbar__right-desktop">
          {/* НОВАЯ ССЫЛКА НА MAESTROWEB */}
          <a
            href="https://maestro-web-nine.vercel.app/" // Ссылка на твой проект MAESTRO-WEB
            target="_blank"
            rel="noreferrer"
            className="navbar__maestroweb-btn" // Новый класс для стилизации
          >
            {t('navbar.maestroweb')} {/* Новый ключ перевода */}
          </a>
          {/* Переключатель языка для десктопа */}
          <LanguageSwitcher />
        </div>

        {/* Бургер-меню (кнопка) - видна только на мобильных */}
        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Использовал burger-line для соответствия CSS */}
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div> {/* Конец navbar-container */}

      {/* Выпадающее меню (мобильное) - появляется поверх контента */}
      <div className={`navbar__menu-wrapper ${menuOpen ? 'open' : ''}`}>
        <nav className="navbar__menu">
          {/* Ссылки для навигации по секциям страницы */}
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
          <Link
            to="contact"
            smooth
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.contact')}
          </Link>
          {/* НОВАЯ ССЫЛКА MAESTROWEB В МОБИЛЬНОМ МЕНЮ - ПЕРЕМЕЩЕНА */}
          <a
            href="https://maestro-web-nine.vercel.app/" // Ссылка на твой проект MAESTRO-WEB
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="navbar__maestroweb-link--mobile" // Изменен класс для стилизации как обычной ссылки
          >
            {t('navbar.maestroweb')}
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