
// src/components/Gallery.jsx
import React from 'react';
import './Gallery.css';

import img1 from '../assets/gallery-1.jpg';
import img2 from '../assets/gallery-2.jpg';
import img3 from '../assets/gallery-3.jpg';
import img4 from '../assets/gallery-4.jpg';
import img5 from '../assets/jpg5.png'
const images = [img1, img2, img3, img4, img5];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Наши работы / Our Work</h2>
      <div className="carousel">
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <img src={src} alt={`Work ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
