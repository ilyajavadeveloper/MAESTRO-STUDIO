import React, { useEffect, useRef, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import './NavBar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);
  const isRtl = i18n.dir(i18n.language) === 'rtl';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    const onClickOutside = (e) => {
      if (!menuOpen) return;

      const clickedInsideMenu = menuRef.current?.contains(e.target);
      const clickedBurger = burgerRef.current?.contains(e.target);

      if (!clickedInsideMenu && !clickedBurger) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [menuOpen]);

  const navItems = [
    { type: 'scroll', to: 'hero', label: t('navbar.home') },
    { type: 'scroll', to: 'gallery', label: t('navbar.gallery') },
    { type: 'scroll', to: 'services', label: t('navbar.services') },
    { type: 'scroll', to: 'faq', label: t('navbar.faq') },
    { type: 'scroll', to: 'contact', label: t('navbar.contact') },
    {
      type: 'external',
      href: 'https://maestro-web-nine.vercel.app/',
      label: t('navbar.maestroweb') || 'MAESTROWEB',
    },
  ];

  const renderNavItem = (item, mobile = false) => {
    if (item.type === 'scroll') {
      return (
          <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              offset={-80}
              duration={500}
              activeClass="is-active"
              onClick={() => {
                if (mobile) closeMenu();
              }}
          >
            {item.label}
          </Link>
      );
    }

    return (
        <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              if (mobile) closeMenu();
            }}
        >
          {item.label}
        </a>
    );
  };

  return (
      <header
          className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
          dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="navbar-container">
          <div className="navbar__left">
            <button
                type="button"
                className="navbar__logo"
                onClick={() => {
                  scroll.scrollToTop({ duration: 500, smooth: true });
                  closeMenu();
                }}
                aria-label="MAESTROSTUDIO home"
            >
              MAESTROSTUDIO
            </button>
          </div>

          <nav className="navbar__nav-desktop" aria-label="Primary navigation">
            {navItems.map((item) => renderNavItem(item))}
          </nav>

          <div className="navbar__right-desktop">
            <LanguageSwitcher />
          </div>

          <button
              ref={burgerRef}
              type="button"
              className={`burger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>

        <div
            className={`navbar__overlay ${menuOpen ? 'open' : ''}`}
            aria-hidden={!menuOpen}
        />

        <div
            id="mobile-menu"
            ref={menuRef}
            className={`navbar__menu-wrapper ${menuOpen ? 'open' : ''}`}
        >
          <nav className="navbar__menu" aria-label="Mobile navigation">
            {navItems.map((item) => renderNavItem(item, true))}
            <div className="lang-mobile">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </header>
  );
};

export default Navbar;