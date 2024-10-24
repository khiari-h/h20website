import React, { useState, useEffect, useCallback } from 'react';
import ServiceCard from './ServiceCard.tsx';
import servicesData from '../../Services/data/services.json';  // Importer le fichier JSON

const ServiceCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    const isLastSlide = currentIndex === servicesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? servicesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  // Ajout des événements de clavier
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    // Ajouter l'écoute des événements de clavier lors du montage du composant
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Nettoyer les événements lorsque le composant est démonté
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [handleNext]);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="w-3/4 flex justify-center">
        <ServiceCard service={servicesData[currentIndex]} />
      </div>

      {/* Pagination indicators */}
      <div className="flex space-x-2 mt-6">
        {servicesData.map((_, index) => (
          <div 
            key={index} 
            onClick={() => setCurrentIndex(index)} // Clicking on dots navigates to respective service
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'} cursor-pointer transition-all duration-300`} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
