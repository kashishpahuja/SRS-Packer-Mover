import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ImagePopup = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50  mt-24 mx-4 lg:mt-0 lg:mx-0" data-aos="fade-up">
      <div className="relative bg-white p-6 rounded-lg max-w-lg w-full shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-900 hover:text-red-600"
        >
          <FaTimes />
        </button>
        <img
          src={image}
          alt="Popup"
          className="w-full h-auto object-cover bg-white"
        />
      </div>
    </div>
  );
};

export default ImagePopup;
