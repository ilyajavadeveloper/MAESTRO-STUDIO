import React from 'react';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

import img1 from '../assets/gallery-1.jpg';
import img2 from '../assets/gallery-2.jpg';
import img3 from '../assets/gallery-3.jpg';
import img4 from '../assets/gallery-4.jpg';
import img5 from '../assets/jpg5.png';

const images = [img1, img2, img3, img4, img5];

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="gallery">
      <h2>{t('gallery.title')}</h2>
      <div className="carousel">
        {images.map((src, idx) => (
          <div key={idx} className="carousel-item">
            <img src={src} alt={`${t('gallery.altPrefix')} ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
