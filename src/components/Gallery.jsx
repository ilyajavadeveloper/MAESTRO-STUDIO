// src/components/Gallery.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import img4 from '../assets/gallery-4.png';
import img5 from '../assets/gallery-5.png';

const images = [img1, img2, img3, img4, img5];

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="gallery">
      <h2>{t('gallery.title')}</h2>
      <div className="grid">
        {images.map((src, idx) => (
          <div key={idx} className="grid-item">
            <img
              src={src}
              alt={`${t('gallery.altPrefix')} ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
