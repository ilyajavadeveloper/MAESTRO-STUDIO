import React from 'react';
import { Instagram, Facebook, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/maestrostudio1?igsh=MThndXo2dG50aGMydA=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 hover:text-gray-600" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575288821792&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="w-6 h-6 hover:text-gray-600" />
        </a>
        <a
          href="https://portfolio-ilyajavadevs-projects.vercel.app/?fbclid=PAQ0xDSwKWrxpleHRuA2FlbQIxMQABpwIOipPPxiL7QmEKUUpkmTWPaOdW1sqCSVIL82t3u0FnrD3SEbdYogrjqtHP_aem_zkT3h0y653rAo0X-dKLR9w"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio"
        >
          <ExternalLink className="w-6 h-6 hover:text-gray-600" />
        </a>
      </div>
    </footer>
  );
}
