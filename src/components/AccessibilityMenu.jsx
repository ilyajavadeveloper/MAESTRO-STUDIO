// src/components/AccessibilityMenu.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './AccessibilityMenu.css';

export default function AccessibilityMenu() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage;

  const [menuOpen, setMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('acc_fontSize');
    return saved ? Number(saved) : 0;
  });
  const [highContrast, setHighContrast] = useState(
    () => localStorage.getItem('acc_highContrast') === 'true'
  );
  const [invertColors, setInvertColors] = useState(
    () => localStorage.getItem('acc_invertColors') === 'true'
  );
  const [disableAnimations, setDisableAnimations] = useState(
    () => localStorage.getItem('acc_disableAnimations') === 'true'
  );
  const [underlineLinks, setUnderlineLinks] = useState(
    () => localStorage.getItem('acc_underlineLinks') === 'true'
  );

  // ---------- ИСПРАВЛЕНИЕ: отключаем правило eslint для первоначального эффекта ----------
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const htmlEl = document.documentElement;

    updateHtmlFontSizeClass(fontSize);

    if (highContrast) htmlEl.classList.add('high-contrast');
    else htmlEl.classList.remove('high-contrast');

    if (invertColors) htmlEl.classList.add('invert-colors');
    else htmlEl.classList.remove('invert-colors');

    if (disableAnimations) htmlEl.classList.add('no-animations');
    else htmlEl.classList.remove('no-animations');

    if (underlineLinks) htmlEl.classList.add('underline-links');
    else htmlEl.classList.remove('underline-links');
  }, []); // запуск только при монтировании

  useEffect(() => {
    updateHtmlFontSizeClass(fontSize);
    localStorage.setItem('acc_fontSize', String(fontSize));
  }, [fontSize]);

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (highContrast) htmlEl.classList.add('high-contrast');
    else htmlEl.classList.remove('high-contrast');
    localStorage.setItem('acc_highContrast', String(highContrast));
  }, [highContrast]);

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (invertColors) htmlEl.classList.add('invert-colors');
    else htmlEl.classList.remove('invert-colors');
    localStorage.setItem('acc_invertColors', String(invertColors));
  }, [invertColors]);

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (disableAnimations) htmlEl.classList.add('no-animations');
    else htmlEl.classList.remove('no-animations');
    localStorage.setItem('acc_disableAnimations', String(disableAnimations));
  }, [disableAnimations]);

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (underlineLinks) htmlEl.classList.add('underline-links');
    else htmlEl.classList.remove('underline-links');
    localStorage.setItem('acc_underlineLinks', String(underlineLinks));
  }, [underlineLinks]);

  const updateHtmlFontSizeClass = (sizeDelta) => {
    const htmlEl = document.documentElement;
    htmlEl.classList.remove('font-smallest', 'font-small', 'font-large', 'font-largest');
    switch (sizeDelta) {
      case -2:
        htmlEl.classList.add('font-smallest');
        break;
      case -1:
        htmlEl.classList.add('font-small');
        break;
      case 1:
        htmlEl.classList.add('font-large');
        break;
      case 2:
        htmlEl.classList.add('font-largest');
        break;
      default:
        break;
    }
  };

  const resetAll = () => {
    setFontSize(0);
    setHighContrast(false);
    setInvertColors(false);
    setDisableAnimations(false);
    setUnderlineLinks(false);
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('acc_')) localStorage.removeItem(key);
    });
  };

  const dir = currentLang === 'he' ? 'rtl' : 'ltr';

  return (
    <>
      <button
        className="acc-button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={menuOpen}
      >
        {t('accessibility.toggle')}
      </button>

      <a href="#main-content" className="skip-link">
        {t('accessibility.skipToContent')}
      </a>

      {menuOpen && (
        <div className="acc-menu" role="dialog" aria-modal="true" dir={dir}>
          <h3 className="acc-menu__title">{t('accessibility.toggle')}</h3>
          <ul className="acc-menu__list">
            <li>
              <button
                onClick={() => setFontSize((prev) => Math.min(prev + 1, 2))}
                className="acc-menu__item"
              >
                {t('acc.increaseFont')}
              </button>
            </li>
            <li>
              <button
                onClick={() => setFontSize((prev) => Math.max(prev - 1, -2))}
                className="acc-menu__item"
              >
                {t('acc.decreaseFont')}
              </button>
            </li>
            <li>
              <label className="acc-menu__toggle">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={() => setHighContrast((prev) => !prev)}
                />
                <span>{t('acc.highContrast')}</span>
              </label>
            </li>
            <li>
              <label className="acc-menu__toggle">
                <input
                  type="checkbox"
                  checked={invertColors}
                  onChange={() => setInvertColors((prev) => !prev)}
                />
                <span>{t('acc.invertColors')}</span>
              </label>
            </li>
            <li>
              <label className="acc-menu__toggle">
                <input
                  type="checkbox"
                  checked={disableAnimations}
                  onChange={() => setDisableAnimations((prev) => !prev)}
                />
                <span>{t('acc.disableAnimations')}</span>
              </label>
            </li>
            <li>
              <label className="acc-menu__toggle">
                <input
                  type="checkbox"
                  checked={underlineLinks}
                  onChange={() => setUnderlineLinks((prev) => !prev)}
                />
                <span>{t('acc.underlineLinks')}</span>
              </label>
            </li>
          </ul>
          <button className="acc-menu__reset" onClick={resetAll}>
            {t('acc.resetAll')}
          </button>
          <button
            className="acc-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label={t('acc.closeMenu')}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
