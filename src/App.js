// src/App.js
import React from 'react';
import './i18n';
import './components/Responsive.css';

import Navbar  from './components/NavBar';
import Hero    from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import FAQ     from './components/FAQ';
import Contact from './components/Contact';
import Footer  from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
