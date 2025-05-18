
import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">MAESTROSTUDIO</div>

      <nav className="navbar__menu">
        <a href="#hero">Главная / Home</a>
        <a href="#gallery">Галерея / Gallery</a>
        <a href="#services">Услуги / Services</a>
        <a href="#faq">Вопросы / FAQ</a>
        <a href="#contact">Контакты / Contact</a>
      </nav>

      <a
        href="https://wa.me/972524388967"
        className="navbar__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Записаться
      </a>
    </header>
  );
};

export default Navbar;
