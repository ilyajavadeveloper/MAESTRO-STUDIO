// src/components/WhatsAppButton.jsx
import React from 'react';
import './WhatsAppButton.css'; // Assuming you have a CSS file for styling
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/972524388967"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      Связаться в WhatsApp
    </a>
  );
};

export default WhatsAppButton;
