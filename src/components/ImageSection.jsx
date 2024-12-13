import React, { useState, useEffect } from 'react';
import ImagePopup from './ImagePopup'; 
import left from '../assets/about/certificate.webp';
import right from '../assets/about/certificate2.webp';

const ImageSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (isPopupOpen) {
      // Prevent scrolling
      document.body.classList.add('overflow-hidden');
    } else {
      // Enable scrolling
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup class on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isPopupOpen]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="relative bg-gray-100 py-10 m-12 lg:mb-20 px-4 lg:px-20">
      <div className="px-4 lg:px-20 flex flex-col lg:flex-row justify-center lg:justify-between gap-8 h-[680px] lg:h-[700px]">
        <img
          src={left}
          alt="Image 1"
          className="w-96 lg:w-1/2 h-[340px] lg:h-[700px] px-8 cursor-pointer brightness-110"
          onClick={() => handleImageClick(left)}
        />
        <img
          src={right}
          alt="Image 2"
          className="w-96 lg:w-1/2  h-[340px] lg:h-[700px] px-8 cursor-pointer brightness-110"
          onClick={() => handleImageClick(right)}
        />
      </div>

      {isPopupOpen && (
        <ImagePopup
          image={selectedImage}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ImageSection;
