import React from 'react';
import viber from '../assets/gallary/viber.webp';
import whatsapp from '../assets/gallary/whatsapp.webp'; 

const IconContainer = () => {
  return (
    <div className="fixed bottom-10 right-6 z-50 grid gap-3">
      <a
        className="flex items-center justify-center w-10 h-10 bg-transparent transition-transform duration-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
        href="tel:+919462327667"
      >
        <img
          className="w-10 h-10 animate-scale-fade bg-white rounded-xl" 
          src={viber} 
          alt="Call Viber"
        />
      </a>
      <a
        className="flex items-center justify-center w-10 h-10 bg-transparent transition-transform duration-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/919462327667"
      >
        <img
          className="w-10 h-10 animate-scale-fade" 
          src={whatsapp} 
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default IconContainer;
