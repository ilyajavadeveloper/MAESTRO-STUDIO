import React from 'react';
import { Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="iconContainer">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/maestrostudio1?igsh=MThndXo2dG50aGMydA=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="link"
        >
          <Instagram className="icon" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61575288821792&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="link"
        >
          <Facebook className="icon" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ilya-hvostenko-a03347298/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="link"
        >
          <Linkedin className="icon" />
        </a>

        {/* Портфолио веб-разработчика */}
        <a
          href="https://portfolio-ilyajavadevs-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Developer Portfolio"
          className="link"
        >
          <ExternalLink className="icon" />
        </a>
      </div>
    </footer>
  );
}
